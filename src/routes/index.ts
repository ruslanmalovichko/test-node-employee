import { Router } from "express"
import { getVacancies, addVacancy } from "../controllers/vacancies"
import { getUsers, addUser } from "../controllers/users"

const router: Router = Router()

router.get("/vacancies", getVacancies)
router.post("/add-vacancy", addVacancy)
router.get("/users", getUsers)
router.post("/add-user", addUser)

export default router

