// What is Synchronous & Asynchronous Programming?

// Synchronous : Execution of code line by line.
// console.log()
// console.log()
// for()
// if()
// console.log()

// Asynchronous: If their is any wait time in our code.
// console.log("Hello")
// setTimeout(()=>{
//     console.log("Asynchronous")
// },2000)
// console.log("End")

// What is Promises ?
// resolve , reject & pending

// calback hell
// function saveToDb(data,res,rej){
//     let internetSpeed=Math.floor(Math.random()*10)+1 // generate random number b/w 1 to 10

//     if(internetSpeed>4){
//         res(internetSpeed)
//     }
//     else{
//         rej(internetSpeed)
//     }
// }

// saveToDb("Aman",(s)=>{
//     console.log("Data 1 Saved",s)
//     saveToDb("Anurag",(s)=>{
//         console.log("Data 2 Saved",s)
//         saveToDb("Ashish",(s)=>{
//             console.log("Data 3 Saved",s)
//         },(s)=>{
//             console.log("Data 3 rejected",s)
//         })
//     },(s)=>{
//         console.log("Data 2 Rejected",s)
//     })
// },(s)=>{
//     console.log("Data 1 Rejected",s)
// })

// Promises 

// function saveToDb(data){
//     return new Promise((res,rej)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1 // generate random number b/w 1 to 10
    
//         if(internetSpeed>4){
//             res(internetSpeed)
//         }
//         else{
//             rej(internetSpeed)
//         }
//     })
// }

// console.log(saveToDb("Anant"))

// then & catch : handles the success & failure of promises.

// saveToDb("Anant")
// .then(()=>{
//     console.log("Data 1 Saved")
//     return saveToDb("Ashish")
// })
// .then(()=>{
//     console.log("Data 2 Saved")
//     return saveToDb("Anmol")
// })
// .then(()=>{
//     console.log("Data 3 Saved")
// })
// .catch(()=>{ // it will work with every then
//     console.log("Data Rejected")
// })

// What is Eventloop?
//  It is the process how thw lines of code are executed.
// Call stack --> Web Api's --> Microtask Queue --> MacroTask Queue

// console.log("1") // call stack
// Promise.resolve().then(()=>{console.log("2")}) // micor task queue
// process.nextTick(()=>{console.log("3")}) // micor task queue
// setTimeout(()=>{ // Macrotask
//     console.log("4")
// })
// console.log("5")// call stack

// console.log("A")
// setTimeout(()=>{
//     console.log("B")
// })
// Promise.resolve().then(()=>{
//     console.log("C")
//     setTimeout(()=>{
//         console.log("D")
//     })
// })
// Promise.resolve().then(()=>{
//     console.log("E")
// })
// console.log("F")

// What is API?
// Application Programming Interface
// 5 Methods:
// i. Get
// ii. Post
// iii. Put : Update full document
// iv. Patch : Update single value
// v. Delete

let url="https://demohotelsapi.pythonanywhere.com/hotels?location=Delhi"
// console.log(fetch(url))
fetch(url)
.then((res)=>{
    // console.log(res)
    return res.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})