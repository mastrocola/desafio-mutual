import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, () => {
    console.log('MongoDB connected')
})

export { mongoose }
