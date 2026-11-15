// //reduce
// const arr=[10,20,30,40,50]
// const result = arr.reduce((accumulater,curr/*value of array*/)=>{
//     //jo bhi value return karenge wo accumulator ke andar jayegi
//     console.log(accumulater,curr)
//     accumulater=accumulater+curr
//     return accumulater
// },0/*initializer od accumulator*/)
// // reduce ka kam hain mujhe koi ek result dena koi value ,ans generate 
// // karna
// console.log(result)

const arr=["orange","apple","banana","orange","apple","banana","orange"]
const result=arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr)){//kya acc ke andar orange hain
        acc[curr]++
    }
    else{
        acc[curr]=1
    }
    return acc;
},{})
console.log(result)