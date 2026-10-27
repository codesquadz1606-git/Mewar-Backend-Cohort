const express=require("express")
const { createUser, getAllUser, getUserByID } = require("../controller/user.controller")
const router=express.Router()

router.get("/",getAllUser) 
router.get("/:id",getUserByID) 

router.post("/user",createUser)

module.exports=router