import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use('/', (req: Request, res: Response) => {
  res.send('Hello from server side')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})