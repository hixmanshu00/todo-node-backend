import {app} from './app.js'
import { connectDB } from './data/database.js'
import { config } from 'dotenv';
config({
    path: './data/config.env'
})

connectDB()

app.listen(process.env.PORT,()=>{
    console.log("server running")
})