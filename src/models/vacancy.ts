import { IVacancy } from './../types/vacancy'
import { model, Schema } from 'mongoose'

const vacancySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    tech_stack: {
      type: String,
      required: true
    },

    requirements: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default model<IVacancy>('Vacancy', vacancySchema)
