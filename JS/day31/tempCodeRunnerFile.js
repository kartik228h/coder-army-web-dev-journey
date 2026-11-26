const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First Promise resolved");
    },5000)
})


async function greet(){
    const data = await p1;
    console.log(data);

    const data2 = await p1;   
    console.log(data2);
}


