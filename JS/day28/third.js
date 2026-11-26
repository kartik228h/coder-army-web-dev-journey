//  JS is a single threaded synchronous language:

// JS bheviour: Async

console.log("10");
//not part of js it is part of web api 
//agar ye js ka part hota toh 10->20->30 print hota 
//agar ye js ka part hota toh js 5 sec count karta phir 20 print karta
//phir 30 print karta but ye web api ka part hai isliye ye 10->30->20 
// print hoga
//aise hein event listener bhi web api ka part hain
//kyunki mein ek sath 4 button chalau toh kaise chal rahe hai
//kyunki js toh single threaded hai toh ek bar mein ek hein 
//event listener chalna chahiye but ye web api ka part hai isliye ye
//ek sath chal rahe hain
setTimeout(() => {
    console.log("20");
}, 5000);//will print later after 5 second

console.log("30");

// single threaded: One task will be executed at a time:

console.log("10");

const timer = Date.now();
// timer Older time
while(Date.now()-timer<2000){
    // Wait for 2 second
}

console.log('20');

console.log("30");