// Variable & Function Declaration.

// let a=10
// var b=20
// const c=30

// console.log(a,b,c)

// let arr=[20,40.56,"Ayush",true,undefined]
// let obj={
//     name:"Ayush",
//     city:"GZB"
// }

// console.log(typeof(obj))

// Ist way to access the value
// console.log(obj.name)
// console.log(obj.city)

// IInd way to acces value
// console.log(obj["city"])

// function sayHii(){
//     console.log("Hello Everyone")
// }

// function sayHii(name,city){// parameters : A variable that is declared inside the scope of function
//     console.log("Hello Everyone",name,city)
// }
// sayHii("Sumit","Gurgaon") // arguments : A value that is paased in a function parameters.

// let sayHii=(name,city,age)=>{
//     console.log(`Hello My name is ${name} & I am from ${city} , my age is ${age}`) // template literal
//     console.log("Hello My name is",name, "& I am from",city , "my age is",age) // NOT RECOMMENDED
// }
// sayHii("Kamal","Noida",30)

// HOISTING & TDZ(TEMPORAL DEAD ZONE)
// Hoisting : Variable & Function.

// Variables are hoisted but in the case of let & const it goes at TDZ
// console.log(a)
// console.log(b)
// // console.log(c)
// var a=10
// let b=20
// // const c=30

// if(true){
//     var m=20 // it support data leakage
//     let n=30 // it do not support data leAKAGE
// }

// console.log(n)

// DIFFRENCE OF VAR , LET & CONST
// VAR CAN BE ACCESSED BEFORE INTIALIZATION
// LET & CONST CANNOT BE ACCESSED BEFORE INTIALIZATION (TDZ)

// VAR CAN BE RE-INITALIZED
// LET & CONST CANNOT BR RE-INITALIZED.

// fUNCTION HOISTING. : Functions are hoisted , but arrow function cannot be used before initalization (TDZ)

// say()
// function say(){
//     console.log("Hello")
// }

// say()
// let say=()=>{
//     console.log("Hello")
// }


// What is closures?
// CLosures is the inner function that is accessing values of the outer function after outer function finishes executing.


// function Outer(){
//     let count=1
//     function Inner(){
//         count++
//         console.log(count)
//     }
//     return Inner()
// }

// Outer()

for(var i=1 ;i<=3;i++){ // var works on same identity.
    setTimeout(()=>{console.log(i)},100)
} 
for(let j=1 ;j<=3;j++){ // let everytime makes a new identity.
    setTimeout(()=>{console.log(j)},100)
}