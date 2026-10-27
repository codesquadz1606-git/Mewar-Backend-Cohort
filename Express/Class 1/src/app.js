const express=require("express")
const router = require("./router/user.router")
const app=express() // server ban gaya

app.use(express.json())
app.use("/",router)
module.exports=app