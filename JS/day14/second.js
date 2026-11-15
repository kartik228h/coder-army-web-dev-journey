//for in loop :isko array ke sath nahi lete
const arr=[10,20,30,40,50,60]
for(let key in arr){
    console.log(key)
}//will print indices which is key

//suppose we add name to array
arr.name="rohit"
for(let key in arr){
    console.log(key)
}//it will print name also which is a key but not
//indices
//for in loop bas enumerable dekhta hai 
//print karne ke liye sirf 

for(let i=0;i<arr.length;i++){
    console.log(i,arr[i])
}//ye sahi kam karega or name ko ignore kar dega 