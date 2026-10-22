const fs=require("fs")

// fs.readFile("demo.txt","utf-8",(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

// fs.writeFile("demo1.txt","This is new file",(err)=>{
//     if (err) throw err
//     console.log("File Added")
// })

// fs.appendFile("demo1.txt","\nThis is append function",(err)=>{
//     if(err) throw err
//     console.log("Data Added")
// })

fs.unlink("demo1.txt",(err)=>{
    if(err) throw err
    console.log("file deleted")
})

console.log("File Handling")