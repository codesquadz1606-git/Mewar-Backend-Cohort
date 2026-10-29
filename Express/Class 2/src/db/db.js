const mongoose=require("mongoose")

async function connectToDb(){
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connectToDb