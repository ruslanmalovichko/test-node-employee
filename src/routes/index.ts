import { Router } from "express"
import { getVacancies, addVacancy } from "../controllers/vacancies"

const router: Router = Router()

router.get("/vacancies", getVacancies)
router.post("/add-vacancy", addVacancy)

export default router

