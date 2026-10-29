const User=require("../model/user.model")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.register=async (req,res)=>{
    const {id, name ,email,password,role}=req.body

    if(!id || !name || !email || !password){
        return res.status(400).json({
            mesaage:"Id , Name , Email & Password is Required"
        })
    }

    // const emailExist=await User.find({
    //     email:email
    // })

    // if(emailExist){
    //     return res.status(409).json({
    //         message:"Email Already Registered"
    //     })
    // }

    const hashedPassword=await bcrypt.hash(password,10)
    const user=await User.create({id:id,name:name,email:email,password:hashedPassword,role:role})

    return res.status(201).json({
        message:"user Registered"
    })
}

exports.login=async(req,res)=>{
    const{email,password}=req.body

    if(!email || !password){
        return res.staus(400).json({
            message:"Email & Password Is required"
        })
    }

    const user=await User.findOne({email})
    if(!user){
        return res.status(401).json({
            message:"Email is not registered"
        })
    }
    

    const checkPassword=await bcrypt.compare(password,user.password)
    if(!checkPassword){
        return res.status(401).json({
            message:"Password is Incorrect"
        })
    }
    // res.json({
    //     user:user.password
    // })

    const token = jwt.sign({
        id:user.id,
        role:user.role
    },
    process.env.JWT_SECRET_KEY,
    {expiresIn:'1d'}
)

    return res.json({
        message:"Logged IN",
        token
    })
}
