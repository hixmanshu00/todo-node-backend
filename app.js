import express from 'express'
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/errorMid.js';
import cors from "cors"

export const app = express();

// using middlewares
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    
    origin: ['https://him-todo-app.netlify.app', 'http://127.0.0.1:5173'],
    methods: ["GET","PUT", "POST", "DELETE"],
    credentials: true
}))

// using routes
app.use("/api/v1/users",userRouter)
app.use("/api/v1/tasks",taskRouter)



app.get('/', (req,res)=> {
    res.send("Home page") 
})

app.use(errorMiddleware)



