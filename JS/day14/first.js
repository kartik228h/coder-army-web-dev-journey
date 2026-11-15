// let obj = {};
// // STEP 1: Property create karna
// obj.name = "rohit";
// // Jab hum normal property create karte hain,
// // toh writable, enumerable aur configurable
// // automatically true hote hain.
// console.log("Step 1: Initial property");
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// // Output:
// // {
// //   value: "rohit",
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // }
// // STEP 2: Writable = true
// // Writable true ka matlab value change kar sakte hain.
// obj.name = "kartik";
// console.log("Step 2: Value changed");
// console.log(obj.name);
// // Output: kartik
// // STEP 3: Writable = false
// // Ab property ka writable false karte hain.
// // Object.defineProperty se existing property
// // ki descriptor update kar sakte hain.
// Object.defineProperty(obj, "name", {
//     writable: false
// });
// console.log("Step 3: Writable false");
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// // Output:
// // {
// //   value: "kartik",
// //   writable: false,
// //   enumerable: true,
// //   configurable: true
// // }
// // STEP 4: Writable false hone ke baad value change karna
// // Strict mode ke bahar assignment silently fail hota hai.
// // Isliye value change nahi hogi.
// obj.name = "rohit";
// console.log("Step 4: Value change attempt");
// console.log(obj.name);
// // Output: kartik
// // STEP 5: Configurable = false
// // Configurable false karne ka matlab:
// // property ko delete nahi kar sakte,
// // aur descriptor ke kuch changes restrict ho jaate hain.
// Object.defineProperty(obj, "name", {
//     configurable: false
// });
// console.log("Step 5: Configurable false");
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// // Output:
// // {
// //   value: "kartik",
// //   writable: false,
// //   enumerable: true,
// //   configurable: false
// // }
// // STEP 6: Configurable false hone par writable true karna
// // Ye allowed nahi hai.
// // TypeError aayega.
// try {
//     Object.defineProperty(obj, "name", {
//         writable: true
//     });
// } catch (error) {
//     console.log("Step 6 Error:", error.message);
// }
// // Error: Cannot redefine property: name
// // STEP 7: Property delete karne ki koshish
// try {
//     delete obj.name;
// } catch (error) {
//     console.log("Step 7 Error:", error.message);
// }
// // Configurable false hone ke karan delete nahi hoga.
// console.log(obj.name);
// // Output: kartik
// // STEP 8: Configurable false hone ke baad bhi
// // writable true se false kar sakte hain.
// // Important: writable true se false allowed hai,
// // lekin false se true allowed nahi hai.
// let obj2 = {};
// Object.defineProperty(obj2, "name", {
//     value: "rohit",
//     writable: true,
//     enumerable: true,
//     configurable: false
// });
// console.log("Step 8: Before writable false");
// console.log(Object.getOwnPropertyDescriptor(obj2, "name"));
// Object.defineProperty(obj2, "name", {
//     writable: false
// });
// console.log("Step 8: After writable false");
// console.log(Object.getOwnPropertyDescriptor(obj2, "name"));

//enumerable
const customer = {
    name: "John Doe",
    age: 30,
    balance: 1000,
    city: "New York"
};
for(let key in customer){
    console.log(key);
}
Object.defineProperty(customer, "name", {
    enumerable: false
});
console.log("\n")
for(let key in customer){
    console.log(key);
}