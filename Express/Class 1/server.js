const app = require("./src/app");
const connectToDB = require("./src/db/db");
const dotenv=require("dotenv").config()

connectToDB()
app.listen(process.env.PORT,()=>{
    console.log(`Listening at Port ${process.env.PORT}`)
})