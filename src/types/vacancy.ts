import { Document } from 'mongoose'

export interface IVacancy extends Document {
  name: string
  description: string
  tech_stack: string
  requirements: string
}
