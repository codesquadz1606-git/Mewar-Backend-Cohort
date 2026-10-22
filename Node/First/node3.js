const http=require("http")

const server=http.createServer((req,res)=>{
    try{
        if(req.method=="GET" && req.url==="/users"){
            res.end("GET Method")
        }

        if(req.method=="POST" && req.url==="/users"){
            res.end("POST Method")
        }

    }catch(err){
        console.log(err)
    }
})

server.listen(3000,()=>{
    console.log("Listening at 3000")
})

// node --watch filename : to restart server automatically.