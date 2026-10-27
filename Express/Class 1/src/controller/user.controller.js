const User=require("../model/user.model")

exports.getAllUser=async(req,res)=>{
    const users=await User.find()
    return res.json({
        users
    })
}

exports.getUserByID=async(req,res)=>{
    const{id}=req.params
    const user=await User.findOne({
        user_id:id
    })

    return res.json({
        user
    })
}

exports.createUser=async (req,res)=>{
    const {user_id,name,email,age}=req.body
    const user=await User.create({user_id,name,email,age})
    return res.json(
        {
            message:"Data Created",
            user
        }
    )
}