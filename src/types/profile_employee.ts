import { Document } from "mongoose"

export interface IProfileEmployee extends Document {
  status: boolean
  vacancy: string
  user: string
}

