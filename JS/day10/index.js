// // // // // // // // //how to create object
// // // // // // // // const obj={
// // // // // // // //     name:"kartik",
// // // // // // // //     account_balance:420,
// // // // // // // //     gender:"male",
// // // // // // // //     age:30
// // // // // // // // }
// // // // // // // // console.log(obj);
// // // // // // // // /*isme data obj ki form mein store karana zyada 
// // // // // // // // asan rehta hai  agar array mein kare toh hame 
// // // // // // // // pta hein nahi ki jaise 420 array mein store karaya 
// // // // // // // // toh 420 kya hain hame nahi pta chalega lekin agar 
// // // // // // // // isse hum obj mein store karayenge toh key ke 
// // // // // // // // through hame pta chal jayega ki 420 kya hain 
// // // // // // // // wo account_balancr hai*/
// // // // // // // // const arr=['rohit',420,"male",30]

// // // // // // // const obj1={
// // // // // // // /*name account_balance gender koi variable 
// // // // // // // nahi hain ye ek string hai jo ki backend mein
// // // // // // // as a string store hoti hain */
// // // // // // //     name:"kartik",
// // // // // // //     account_balance:420,
// // // // // // //     gender:"male",
// // // // // // //     age:30
// // // // // // // }
// // // // // // // const obj2={
// // // // // // // /*ham aise bhi isme key ko likh sakte hain */
// // // // // // //     "name":"kartik",
// // // // // // //     account_balance:420,
// // // // // // //     "gender":"male",
// // // // // // //     age:30
// // // // // // // }
// // // // // // // console.log(obj1.gender)
// // // // // // // console.log(obj1["gender"])//another way to represent


// // // // // // const obj2={
// // // // // //     0:"kartik",
// // // // // //     1:420,
// // // // // //     2:"male",
// // // // // //     3:30
// // // // // // }
// // // // // // // console.log(obj2.0) //wrong 
// // // // // // console.log(obj2[0]);
// // // // // // console.log(obj2[0])

// // // //  const arr={
// // // //      0:"kartik",
// // // //      1:420,
// // // //      2:"male",
// // // //      3:30,
// // // //      length:4,
// // // //      undefined:0,
// // // //      NULL:2
// // // //  }

// // // //another method of creating an object 
// // // // const person=new Object();
// // // // //property add
// // // // person.name="rohit";
// // // // person.age=20
// // // // person.gender="Male"
// // // // console.log(person)
// // // // //delete
// // // // delete person.age;
// // // // console.log(person)
// // // // //update or modify
// // // // person.name="Mohit"
// // // // console.log(person)

// // // //third method
// // // class people{
// // //     constructor(name,age,gender){
// // //         this.name=name;//this is pointing to 
// // //         //the object which is referring
// // //         this.age=age;
// // //         this.gender=gender;
// // //     }
// // // }
// // // let person1=new people("rohit",20,"Male")
// // // let person2=new people("Mohit",30,"Female")
// // // console.log(person1)

// // let obj={
// //     name:"kartik",
// //     age:30,
// //     account_balance:420,
// //     gender:"male"
// // }
// // // keys, values
// // const arr=Object.keys(obj)
// // console.log(arr)
// // //keys bhi chahiye or value bhi
// // const arr1=Object.entries(obj)
// // console.log(arr1)

// const obj1={
//     a:1,
//     b:2
// }
// const obj2={
//     c:3,
//     d:4
// }
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)


//spread operator
const obj1={
    a:1,
    b:2
}
const obj2={
    c:3,
    d:4
}
//spread operator obj ko pura khol deta hain
const obj3={...obj1,...obj2}
console.log(obj3)