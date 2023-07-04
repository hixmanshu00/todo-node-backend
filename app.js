import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import { config } from 'dotenv';

export const app = express();

config({
    path: './data/config.env'
})

app.use("/users",userRouter)

app.use(express.json());

app.get('/', (req,res)=> {
    res.send("Home page") 
})



