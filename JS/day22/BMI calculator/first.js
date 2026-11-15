const button=document.getElementById("button");
button.addEventListener('click',()=>{
    const weight=document.getElementById("weight").value;
    const height=document.getElementById("height").value;
    const result=document.getElementById("result");
    const bmi=weight/((height/100)**2);
    result.textContent=`Your BMI is ${bmi.toFixed(2)}`;
})