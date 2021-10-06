import { Response, Request } from 'express'
import { IVacancy } from './../../types/vacancy'
import Vacancy from '../../models/vacancy'

const getVacancies = async (req: Request, res: Response): Promise<void> => {
  try {
    const vacancies: IVacancy[] = await Vacancy.find()
    res.status(200).json({ vacancies })
    // res.end(JSON.stringify(vacancies, null, 4));
  } catch (error) {
    throw error
  }
}

const addVacancy = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IVacancy, 'name' | 'description' | 'tech_stack' | 'requirements'>

    const vacancy: IVacancy = new Vacancy({
      name: body.name,
      description: body.description,
      tech_stack: body.tech_stack,
      requirements: body.requirements
    })

    const newVacancy: IVacancy = await vacancy.save()
    const allVacancies: IVacancy[] = await Vacancy.find()

    res
      .status(201)
      .json({ message: 'Vacancy added', vacancy: newVacancy, vacancies: allVacancies })
  } catch (error) {
    throw error
  }
}

export { getVacancies, addVacancy }
