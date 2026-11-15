// call back function

function names(fun){
    console.log("hello i am name")
    fun()
}
function greet(){
    console.log("i am call back function")
}
names(greet);
/*function ke andar koi dusra function ka reference bhejna isi ko hum 
call back function bolte hain isme greet ko fun catch karte hai or
jab hum fun ko call karenge toh woh greet ko call karega*/

function fetchData(){
    /*iska kam hain har 5 sec mein backend se data lana or 
    frontend mein show karna*/
    console.log("i am fetching data")
}
setInterval(fetchData,5000/*value is in milisecond*/)
/*isme fetchdata ko as an argument bhejta hu or isko ya har 5 sec mein 
execute karta rahega */
