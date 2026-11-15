// // // // // // // // // console.log(arr[0])
// // // // // // // // // console.log(arr.at(3))//at can take -ve index
// // // // // // // // // console.log(arr.at(-1))
// // // // // // // // // console.log(arr)
// // // // // // // // // console.log(arr.length)


// // // // // // // // const arr=[2,35,1,8,9,"rohit",true]
// // // // // // // // const newarr=structuredClone(arr);
// // // // // // // // console.log(arr==newarr)

// // // // // // // const arr=[2,35,1,8,9,"rohit",true]
// // // // // // // //push at last
// // // // // // // arr.push(30)
// // // // // // // console.log(arr)
// // // // // // // //pop from last
// // // // // // // arr.pop()
// // // // // // // console.log(arr)

// // // // // // const arr=[2,35,1,8,9,"rohit",true]
// // // // // // //to insert at start
// // // // // // arr.unshift(10)
// // // // // // arr.unshift(40)
// // // // // // console.log(arr)
// // // // // // // to delete from start
// // // // // // arr.shift()
// // // // // // arr.shift()
// // // // // // console.log(arr)

// // // // // //delete operation
// // // // // const arr=[2,35,1,8,9,"rohit",true]
// // // // // delete arr[0]
// // // // // console.log(arr)

// // // // const arr=[2,8,35,1,8,9,"rohit",true,8]
// // // // console.log(arr.indexOf(8))
// // // // console.log(arr.lastIndexOf(8))
// // // // console.log(arr.includes(10))

// // // const arr=[2,8,35,1,8,9,"rohit",true,8]

// // //slice and splice
// // const arr=[2,8,35,1,8,9,"rohit",true,8]
// // console.log(arr)
// // console.log(arr.slice(2,4))//dont include 4th index

// // //splice
// // console.log(arr.splice(2,5))/*pehle number index 
// // indicate karta or dusra kitne elements chahiye*/
// // //splice original array mein changes kar deta hain 
// // console.log(arr)
// // arr.splice(2,3,"money",235)//add after index 2
// // /*int this from index 2 3 elements got delete then 
// // add money and 235*/
// // console.log(arr)


// // let arr1=[2,35,6,11]
// // let arr2=[5,12,19,20]
// // let arr3=arr1.concat(arr2)//to add 2 arrays or more
// // console.log(arr3)
// // arr4=arr3.concat(arr1,arr3)
// // console.log(arr4)
// // arr4.push(arr1)
// // console.log(arr4)

// let arr1=[2,35,6,11]
// let arr2=[5,12,19,20]
// arr2.push(arr1)
// console.log(arr2)

//not a recommended way
let ac=new Array(2,3123,123,432,"rohnrwe")
console.log(ac)
//agar ham ek hein number dalenge toh wo size ho 
// jayega array ka
let ac1=new Array(10)
console.log(ac1.length)