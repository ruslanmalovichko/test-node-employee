import { Router } from 'express'
import { getVacancies, addVacancy } from '../controllers/vacancies'
import { getUsers, addUser } from '../controllers/users'
import { getProfilesEmployee, addProfileEmployee } from '../controllers/profiles_employee'

const router: Router = Router()

router.get('/profiles-employee', getProfilesEmployee)
router.post('/add-profile-employee', addProfileEmployee)
router.get('/vacancies', getVacancies)
router.post('/add-vacancy', addVacancy)
router.get('/users', getUsers)
router.post('/add-user', addUser)

export default router
