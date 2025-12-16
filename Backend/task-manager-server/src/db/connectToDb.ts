import mongoose from "mongoose";
import 'dotenv/config'

export const connectToMongo = async () => {
    try {
        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`Mongo db connection host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('Error: ', error)
        process.exit(1)
    }
}
