import { Router } from "express"
import { addVacancy } from "../controllers/vacancies"

const router: Router = Router()

router.post("/add-vacancy", addVacancy)

export default router

