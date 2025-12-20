import express, { Request, Response } from 'express'
import { connectToMongo } from './db/connectToDb'
import user from './routes/user.routes'
import task from './routes/task.routes'
import { createServer } from 'node:http'
import { initSocket, getIO } from './socket/socket'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const PORT = process.env.PORT || 3500
const app = express()
const server = createServer(app)

initSocket(server)

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
    res.send('Task Manager Server is running')
})

app.use('/api/v1/user', user)
app.use('/api/v1/task', task)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

connectToMongo()