import express, { Request, Response } from 'express'
import { connectToMongo } from './db/connectToDb'
import user from './routes/user.routes'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
const PORT = process.env.PORT || 3500
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Task Manager Server is running')
})

app.use('/api/v1/user', user)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

connectToMongo()