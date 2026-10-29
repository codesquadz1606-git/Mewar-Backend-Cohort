const express=require("express")
const router = require("./routes/auth.routes")
const app=express()
const userRouters=require("./routes/user.routes.js")
app.use(express.json())

app.use("/api/auth",router);
app.use("/api",userRouters)


module.exports=app