// // // //global object
// // // console.log("hello world")
// // // let a = 10//ye global scope ka part hain naki 
// // // //object ka 
// // // var c=20//ye global object ka part hain
// // // //toh isko this lgva karke use kar sakte hain
// // // console.log(this.c)


// // //this keyword inside a function
// // /*i:-Non-strict Mode-When this is used inside a regular function, it 
// // refers to the global object
// // ii:-strict mode-this will be undefined inside a function
// // */

// // // function greet(){
// // //     console.log(this)
// // // }
// // // greet() 

// // "use strict"
// // function greet(){
// //     console.log(this)
// // }
// // greet()

// "use strict"
// a=10
// console.log(a)


//Inside a Method(object context)
//when this is used inside an object's method, it refers to the object 
//that

const obj={
    name:"kartik",
    age:20,
    greet:function(){
        let ab=()=>{
            console.log(this)
        }
        ab()
    }
}
obj.greet()