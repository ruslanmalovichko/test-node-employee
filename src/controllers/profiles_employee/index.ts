import { Response, Request } from 'express'
import { IProfileEmployee } from './../../types/profile_employee'
import ProfileEmployee from '../../models/profile_employee'

const getProfilesEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const profilesEmployee: IProfileEmployee[] = await ProfileEmployee.find()
      .populate('vacancy')
      .populate('user')
    res.status(200).json({ profilesEmployee })
    // res.end(JSON.stringify(profilesEmployee, null, 4));
  } catch (error) {
    throw error
  }
}

const addProfileEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IProfileEmployee, 'status' | 'vacancy' | 'user'>

    const profileEmployee: IProfileEmployee = new ProfileEmployee({
      status: body.status,
      vacancy: body.vacancy,
      user: body.user
    })

    const newProfileEmployee: IProfileEmployee = await profileEmployee.save()
    const allProfilesEmployee: IProfileEmployee[] = await ProfileEmployee.find()

    res
      .status(201)
      .json({ message: 'ProfileEmployee added', profileEmployee: newProfileEmployee, profilesEmployee: allProfilesEmployee })
  } catch (error) {
    throw error
  }
}

export { getProfilesEmployee, addProfileEmployee }
