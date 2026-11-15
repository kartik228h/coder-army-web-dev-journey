// // // // // // // const obj1={
// // // // // // //     a:1,
// // // // // // //     b:2
// // // // // // // }
// // // // // // // //shallow copy :-copy ho rha hain by refernce
// // // // // // // //obj2 sam address ko refer karega jisko obj1 
// // // // // // // // karta hain
// // // // // // // let obj2=obj1
// // // // // // // //deep copy:-ek alag address par data ki copy banti 
// // // // // // // // hain or usko obj3 refer karega data same hoga 
// // // // // // // // but address diff hoga
// // // // // // // let obj3=structuredClone(obj1);

// // // // // // //nested object
// // // // // // const user={
// // // // // //     name:"Rohit",
// // // // // //     balance:420,
// // // // // //     address:{
// // // // // //         pincode:246149,
// // // // // //         city:"kotdwar"
// // // // // //     }
// // // // // // }
// // // // // // console.log(user.address.city)

// // // // // const user={
// // // // //     name:"kartik",
// // // // //     balance:420,
// // // // //     address:{
// // // // //         pincode: 246149,
// // // // //         city:"kotdwar"
// // // // //     }
// // // // // }
// // // // // /*assign mein ek dikkat hain ki wo nested object 
// // // // // ki shallow copy karta hain or jo nested nahi hain 
// // // // // uski deep copy karta hain like     
// // // // //     address:{
// // // // //         pincode: 246149,
// // // // //         city:"kotdwar"
// // // // //     }
// // // // //     iski shallow copy hogi or name and balance ki
// // // // //     deep copy hog
// // // // // lekin structure colne se pure ki deep copy banegi*/
// // // // // const user2=Object.assign({},user)
// // // // // console.log(user2)
// // // // // user2.address.pincode="Mohit"
// // // // // console.log(user.address.pincode)

// // // // //destructuring of an object
// // // // //destructure karne ka matlab mujhe iss object 
// // // // //ki kuch values ko individually nikalna hain
// // // // let obj ={
// // // //     name:"Rohit",
// // // //     money:420,
// // // //     balance:30,
// // // //     age:20
// // // // }
// // // // const {name, balance}=obj
// // // // console.log(name,balance)
// // // // //name will be accessed by full_name 
// // // // const {name:full_name, balance:amount}=obj
// // // // console.log(full_name,amount)


// // // // //array destructure
// // // // const arr=[3,2,1,5,10]
// // // // const [a,b]=arr//array ka pehle dusra value
// // // // //nikalne ka tareeka
// // // // console.log(a,b)
// // // // const [first,second,,fourth]=arr//array ka third 
// // // // //element skip karke fourth dalna
// // // // console.log(first,second,fourth)


// // // const arr=[3,2,1,5,10]
// // // //bache huye sare elements third ke andar daldo
// // // const [first,second,...third]=arr
// // // console.log(first,second,third)


// // //nested ko agar destructure karna ho toh
// // let obj={
// //     name:"Rohit",
// //     money: 430,
// //     balance: 30,
// //     age: 20,
// //     arr: [20,40,60,80],
// //     aadhar: "asdfgh",
// //     address:{
// //         pincode:246149,
// //         city:"kotdwar"
// //     }
// // }
// // // const {address:ads}=obj
// // // console.log(ads)//ads ke andar pura object rakha hoga

// // //agar kisi nested object ko destructure karna ho:-
// // const {address:{pincode}}=obj
// // console.log(pincode)

// // const {arr:[first]} = obj
// // console.log(first)


// let user ={
//     name:"Rohit",
//     amount:430,
//     greet: function(){
//         return "hello coder army"
//     },
//     meet: function(){
//         return 20
//     }
// }
// console.log(user.toString())

let user1 ={
    name:"Rohit",
    age: 20
}
let user2 ={
    amount:420,
    money:50
}
user2.__proto__=user1
/*user2 ke pas user1 ki sari properties ko inherit
kar lega */
console.log(user2.name)