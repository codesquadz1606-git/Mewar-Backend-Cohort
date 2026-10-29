const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:[true,"Id is required"]
    },
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    role:{
        type:String,
        required:[true,"Role is required"]
    }
})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel