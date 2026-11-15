let a=10
let b=a
b=30
console.log(b)
console.log(a)
//primitive data type vs Non primitive data type
//primitive data type: Immutable
//Non Primitive data type:Mutable

//object example:
let obj1={
    id:20,
    naming:"kartik"
}
let obj2=obj1
console.log(obj1)
console.log(obj2)
obj2.id=30
console.log(obj1)
console.log(obj2)
