// // // //function
// // // function greet(){
// // //     console.log("hello coder army")
// // // }
// // // greet()

// // // //add program
// // // function sum(number1, number2){
// // //     console.log(number1+number2)
// // // }
// // // sum(7,8)
// // // sum(10,15)

// // // //multiply program
// // // function multiply(number1, number2){
// // //     return number1*number2
// // // }
// // // console.log(multiply(2,8))

// // // const fun=function(){
// // //     console.log("hello coder army")
// // //     console.log("Mein toh badhiya hu");
// // //     return 5
// // // }
// // // console.log(fun())

// // //Arrow function
// // // const sum=(number1,number2)=> number1+number2

// // // console.log(sum(4,8))

// // const cube=number=> number*number*number

// // console.log(cube(2))

// const sum=function(...number){
//     // ... is rest operator 
//     //isko lagane se hum itne bhi numbers dal 
//     // sakte hai as parameter
//     console.log(number)
// }
// sum(2,3,4)
 let obj ={
    name:"kartik",
    age:30,
    amount:420
}
function obj1(obj){
    console.log(obj.name,obj.age)
}
obj1(obj)