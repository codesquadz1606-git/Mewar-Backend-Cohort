const express=require("express")
const router=express.Router()
const multer=require("multer")
const uploadFile = require("../storage/songs.storage")
const songModel = require("../model/songs.model")

const storage=multer({
    storage:multer.memoryStorage(),
    limits:{
        files:20,
        fileSize:200*1024*1024
    }
})

router.post("/song",storage.array("audioFile"),async (req,res)=>{
    const {title,artist,mood}=req.body
    const data=req.files

    console.log(title,mood,artist)
    console.log(data)


    for(let i=0;i<data.length;i++){
        const fileData=await uploadFile(data[i])
        const songData=await songModel.create({
            title:title,
            artist:artist,
            mood:mood,
            audioFile:fileData.url
        })
    }

    res.json({
        message:"Song Created"
    })
})

module.exports=router