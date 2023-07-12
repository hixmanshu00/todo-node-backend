import express from 'express'
import userRouter from './routes/user.js'

export const app = express();

// using middlewares
app.use(express.json());

// using routes
app.use("/api/v1/users",userRouter)


app.get('/', (req,res)=> {
    res.send("Home page") 
})



