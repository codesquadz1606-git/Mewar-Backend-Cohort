const dotenv=require("dotenv").config()
const app = require("./src/app");
const connectToDb = require("./src/db/db");


connectToDb()
app.listen(process.env.PORT,()=>{
    console.log(`Listening at ${process.env.PORT}`)
})