let obj={
    name:"rohan",
    age:24,
    gender:"male",
    city:"kotdwar"
}
// //for in loop
// //can iterate over keys in an object
// for(let key in obj){
//     console.log(key,":",obj[key]);
// }

// //object.keys(obj)
// console.log(Object.keys(obj))//return array of keys

let obj2 =Object.create(obj);
obj2.money=420
obj2.id="roh"
console.log(obj2)
console.log(Object.keys(obj2))

for(let key in obj2){
    console.log(key);
}