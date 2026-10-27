const mongoose=require("mongoose")

async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports=connectToDB 