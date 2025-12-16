import express, { Request, Response } from 'express'
import { connectToMongo } from './db/connectToDb'
import user from './routes/user.routes'

const app = express()

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