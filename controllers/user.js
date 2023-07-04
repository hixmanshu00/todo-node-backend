import { Users } from "../models/user.js"

export const getUser = async (req,res)=> {
    const users = await Users.find({})
    res.json({
        success: true,
        users
    })
}

export const newUser = async (req,res)=> {
    const {name, email, password} = req.body;
    const user = {
        name,
        email,
        password
    }
    await Users.create(user);

    res.json({
        success: true,
        message: "Registered Successfully"
    })
}

export const getUserbyId = async (req,res)=>{
    const {id} = req.params;
    const user = await Users.findById(id);

    res.json({
        success:true,
        user
    })
}