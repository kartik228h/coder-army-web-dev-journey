// //set 
// const set=new Set([10,20,30,40,40])
// console.log(set)

const set=new Set();
set.add(4)
set.add(6)
set.add("Rohit")
set.add(30)

// instgram_id pehle se bani hai ya nahi check karna
const user_id=new Set(["rohit_negi9","Mohi-91","ravi.93","chavi_90"])
let new_user = "rohit_negi9";
console.log(user_id.has(new_user))

user_id.clear();
console.log(user_id)