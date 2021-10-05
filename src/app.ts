import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

mongoose
  .connect("mongodb://localhost:27017/test-node-employee")
  .then(() => {
    app.use(express.json());
    app.use(cors())
    app.use(todoRoutes)

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    });
  });

