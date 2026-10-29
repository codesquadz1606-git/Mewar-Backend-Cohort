const app = require("./src/app");
const connectToDb = require("./src/db/db");
const dotenv=require("dotenv").config()

connectToDb()
app.listen(process.env.PORT,()=>{
    console.log(`Listening at ${process.env.PORT}`)
})