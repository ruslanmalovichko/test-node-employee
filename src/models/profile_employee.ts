import { IProfileEmployee } from './../types/profile_employee'
import { model, Schema } from 'mongoose'

const profileEmployeeSchema: Schema = new Schema(
  {
    status: {
      type: Boolean,
      required: true
    },

    vacancy: {
      type: Schema.Types.ObjectId,
      ref: 'Vacancy',
      required: true
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
)

export default model<IProfileEmployee>('ProfileEmployee', profileEmployeeSchema)
