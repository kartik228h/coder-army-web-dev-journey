// // // // let user={
// // // //     name:"rohit",
// // // //     age:30
// // // // }
// // // // console.log(Object.getOwnPropertyDescriptor(user,"name"))
// // // // Object.defineProperties(user,'name',{
// // // //     writable:false,
// // // // })
// // // // //hum rohit ko change nahi kar sakte hain
// // // // user.name="mohit"
// // // // /*ye kisi bhi key ke writable ko false karna iska matlab ye nahi 
// // // // ki hum usko hacking se bacha rahe hai ki koi hacker name change na kar
// // // // sakte iska matlab ye nahi hai kyunki agar hacker ke pas database ka 
// // // // access aa gaya toh wo writable ko bhi ture karke changes kar sakta hain 

// // // // purpose:-iska ek hein kam hein ki code mein accidental changes na ho 
// // // // sake bas*/
// // // // console.log(Object.getOwnPropertyDescriptor(user,'name'))

// // // // //for of loop:-jab values ke upar diret access chahiye ho jab mujhe
// // // // //for of loop best hain array or string par iterate karne ke liye
// // // // const arr=[1,2,3,4,5,6,7,8]
// // // // for(let value of arr){
// // // //     console.log(value)
// // // // }
// // // // let str="rohit is a good boy"
// // // // for(let value of str){
// // // //     console.log(value)
// // // // }

// // // /*dont use for of loop in object:-for of loop object mein iterate 
// // // karne ke liye define nahi ho rakhi hain jaise array mein lenght pta hain
// // // kitni bar itegrate karna hain lekin object mein na koi lenght pta hoti
// // // hai or nahi iske keys continous like array hota hain*/
// // // // const obj={
// // // //     name:"chavi",
// // // //     age:22,
// // // //     gender:"female"
// // // // }
// // // // for(let value of Obj){
// // // //     console.log(value)
// // // // }

// // // //for each
// // // // let arr=[10,20,30,40,50,60,70,80]
// // // // arr.forEach(function(num){//ye ek call back function ko extract karta hai
// // // // console.log(num);
// // // // })

// // // /*filter:-same foreach ki tarah hein kam karta hai bas isme data filter 
// // // ho jata hain*/
// // // let arr=[10,22,33,41,50,60,77,80]
// // // const result=arr.filter((num)=>num%2==0 //will return true or false
// // // )
// // // console.log(result)

// // const students =[
// //     {name:"Rohan",age:22,marks:70},//filter dtudents with marks >50
// //     {name:"mohan",age:32,marks:20},
// //     {name:"sohan",age:12,marks:50},
// //     {name:"tohan",age:42,marks:90},
// // ]
// // const result=students.filter((obj)=> obj.marks>50)
// // console.log(result)

// //map
// const arr=[1,2,4,5]
// //can pas 3 arguments in this number,index,array
// const result=arr.map((num)=>{
//     return num*num//map mein ham modify of filter dono kar sakte hai
// })
// //value modify hokar result ke andar store hongi naki main array mein
// console.log(result)

const arr=[1,2,4,5,6,7,8]
const result = arr.filter((num)=>num%2==0).map((num)=>num*num);
//isme values filter hokar map mein jayengi map unhe modify karega
//jaise filter ne 4 ko filter kiya map ne usko 16 bna karke result mein 
// store kara diya
console.log(result)