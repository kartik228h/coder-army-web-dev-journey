// // // //if-else
// // // let age=30
// // // if(age>=18){
// // //     console.log("eligible for voting")
// // // }
// // // else{
// // //     console.log("not eleigible for voting")
// // // } 

// // let age=20
// // if(age<18){
// //     console.log("Kid")
// // }
// // else if(age>45){
// //     console.log("OLD")
// // }
// // else {
// //     console.log("Young")
// // }


// //Multiple condition: switch

// switch(new Date().getDay()){//aj ka day dega 
//                             //uska number
//     case 0:
//         console.log("monday");
//         break;
//     case 1:
//         console.log("tuesday");
//         break;
//     case 2:
//         console.log("webnesday");
//         break;
//     case 3:
//         console.log("thursday");
//         break;
//     case 4:
//         console.log("friday");
//         break;
//     case 5:
//         console.log("saturday");
//         break;
//     case 6:
//         console.log("sunday");
//         break;
//     default:
//         console.log("not a valid day")
// }

let sum=0;
for(let i=0;i<20;i++){
    sum+=i;
}
console.log(sum)