const User=require("../model/user.model")

// GET getProfile : here user gets its profile.

const getProfile=(req,res)=>{
    const user=User.findById(req.user.id)
    return res.status(200).json({
        message:"Welcome to your Profile",
        user:{id:user.id,name:user.name,email:user.email,role:user.role}
    })
}

const getAllUsers=async (req,res)=>{
    const users=await User.find()
    res.status(200).json({
        message:"All Users(admin only)",
        users:users
    })
}

module.exports={getProfile,getAllUsers}