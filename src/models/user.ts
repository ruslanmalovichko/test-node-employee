import { IUser } from './../types/user'
import { model, Schema } from 'mongoose'

var validateEmail = function (email: string) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
}

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      validate: [validateEmail, 'invalid email']
    }
  },
  { timestamps: true }
)

export default model<IUser>('User', userSchema)
