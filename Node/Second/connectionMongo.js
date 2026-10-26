import http from 'http'
import { MongoClient } from 'mongodb'

// ---- Establishing Connection With MongoDB
const client = new MongoClient("mongodb://localhost:27017")
await client.connect()

const userCollect = client.db("mewar_users").collection("users")
console.log("MongoDb Connected")

// ----helper
function sendJSON(res, status, data) {
    res.writeHead(status, { 'content-type': "application/json" })
    res.end(JSON.stringify(data))
}

// ------- creating the server

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === "/users" && req.method === "GET") {
            const users = await userCollect.find().toArray()
            return sendJSON(res, 200, users)
        }

        if(req.url==="/user" && req.method==="GET"){
            const {course}=req.params
            res.end("Hello")
        }

        if(req.url==="/users" && req.method==="POST"){
            let body=""
            req.on("data",chunk=>{
                body+=chunk
            })

            req.on("end",async ()=>{
                let user;
                try{
                    user=JSON.parse(body) // string ka data JSON mae convert ho gaya
                }
                catch(err){
                    return sendJSON(res,400,{error:"Invalid JSON"})
                }

                if(!user.name && !user.course){
                    return sendJSON(res,400,{error:"Name & course is required"})
                }

                try{
                    const newUser={name:user.name , course:user.course}
                    const result=await userCollect.insertOne(newUser)
                    return sendJSON(res,201),{
                        message:"Data created",
                        data:newUser
                    }
                }catch(err){
                    console.error(err)
                    sendJSON(res,500,{error:"Database Error"})
                }
            })

        }
    } catch (err) {
        console.log(err)
    }
})

server.listen(3000,()=>{
    console.log("Listening at 3000")
})