const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
 user_id:{
    type:Number,
    required:[true,"Id is Required"],
    unique:true
 },
  name:{
    type:String,
    required:[true,"Name is Required"]
  }  ,
  email:{
    type:String,
    required:[true,"Email is required"],
    unique:true
  },
  age:{
    type:Number,
    required:[true,"Age is Required"]
  }
})


const userModel=mongoose.model("users",userSchema)

module.exports=userModel