// Array Methods
let arr=[10,20,30,40,50]

// console.log(typeof(arr))

// What is callback function?
// A function inside another function waiting for execution.

// map
// arr.map((el)=>{
//     console.log(el+10)
// })

// filter always returns an array.
// let filteredArr=arr.filter((el)=>{
//     return el>30
// })

// console.log(filteredArr)

// find : finds the element from the array, & if their is mulitple similar data , then it will find firsst occurence only.
// let findNum=arr.find((el)=>{
//     return el==150
// })

// console.log(findNum)

// reduce : convert a array into the single value.
// reduce((acc,el)=>{},acc)

// let sumOfArr=arr.reduce((acc,el)=>{
//     acc+=el; // acc=acc+el
//     console.log(acc)
//     return acc;
// },0)

// console.log(sumOfArr)

// let data=[
//     {city:"Noida"},
//     {city:"Delhi"},
//     {city:"Noida"},
//     {city:"Noida"},
//     {city:"Gurgaon"},
//     {city:"Noida"},
//     {city:"Delhi"},
//     {city:"Noida"},
//     {city:"Gurgaon"},
// ]

// let byCity=data.reduce((acc,el)=>{
//     acc[el.city]=(acc[el.city] || 0) +1
//     console.log(acc)
//     return acc
// },{})

// console.log(byCity)


// Destructuring of arr & obj
// let data=["shivam","himannshu","swati","kanika","shubham"]

// ... spread operator : copies the element for the array without any reference.

// let[first,second,...average]=data
// console.log(first,second,average)

// let obj={
//     name:"Shubham",
//     marks:98,
//     city:"Gurgaon",
//     college:"NorthCap"
// }
// // in object destructuring is based on key name
// let {name,marks,city,college}=obj
// console.log(name,marks,city,college)

// let user={
//     name:"Aman",
//     regular(){console.log(this.name)}, // this will refer the object value
//     arrow:()=>{console.log(this.name)} // this has lost the scope.
// }

// user.regular()
// user.arrow()


// Classes
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    introduce(){ return `My name is ${this.name} & i am ${this.age} years old.`}
}

// st1=new Student("Anah",23)
// st1.introduce()

class Student extends Person{
    constructor(name,age,marks){
        super(name,age) // this means previous class value.
        this.marks=marks
    }

    introduce(){
        console.log(`${super.introduce()} and I scored ${this.marks}`)
    }
}

p1=new Student("Shubham",25,98)
p1.introduce()

