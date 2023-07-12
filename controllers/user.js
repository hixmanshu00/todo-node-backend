import { Users } from "../models/user.js"
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken"

export const getAllUsers = async (req,res)=> {

}

export const login = async (req,res)=> {

}

export const register = async (req,res)=> {
    const {name,email,password} = req.body

    let user = await Users.findOne({email})

    if(user){
        return res.status(404).json({
            success: false,
            message: "User Already Exists"
        })
    }
    else{
        const hashedPassword = await bcrypt.hash(password,10);

        user = await Users.create({name,email,password:hashedPassword})

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

        res.status(201).cookie("token", token, {
            httpOnly: true,
            maxAge: 15*60*1000,
        }).json({
            success: true,
            message: "Registered Successfully"
        })
    }
}

export const getUserDetails = async (req,res)=>{

}