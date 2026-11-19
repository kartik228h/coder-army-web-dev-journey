const board=document.querySelector('#board');
let you;
let computer;
board.addEventListener('click',(event)=>{
    const image = document.querySelector('#img');
   if(event.target.id==="rock"){
    you="rock";
    computer = Math.floor(Math.random()*3);
    if(computer===0){
        image.src="image/stone.png";
    }
    else if(computer===1){
        image.src="image/paper.png";
    }
    else{
        image.src="image/scissor.png";
    }
   }
   else if(event.target.id==="paper"){
    you="paper";
    computer = Math.floor(Math.random()*3);
    if(computer===0){
        image.src="image/stone.png";
    }
    else if(computer===1){
        image.src="image/paper.png";
    }
    else{
        image.src="image/scissor.png";
    }
   }
   else if(event.target.id==="scissor"){
    you="scissor";
    computer = Math.floor(Math.random()*3);
    if(computer===0){
        image.src="image/stone.png";
    }
    else if(computer===1){
        image.src="image/paper.png";
    }
    else{
        image.src="image/scissor.png";
    }
   }
    // document.querySelector('#apponent').innerHTML = "";
    // document.querySelector('#apponent').appendChild(image);
    if(you==="rock"&&computer===1){
        document.querySelector('#winneresult').innerHTML = "You Lose";
    }
    if(you==="paper"&&computer===2){
        document.querySelector('#winneresult').innerHTML = "You Lose";
    }
    if(you==="scissor"&&computer===0){
        document.querySelector('#winneresult').innerHTML = "You Lose";
    }
    if(you==="rock"&&computer===2){
        document.querySelector('#winneresult').innerHTML = "You Win";
    }
    if(you==="paper"&&computer===0){
        document.querySelector('#winneresult').innerHTML = "You Win";
    }
    if(you==="scissor"&&computer===1){
        document.querySelector('#winneresult').innerHTML = "You Win";
    }
    if(you==="rock"&&computer===0){
        document.querySelector('#winneresult').innerHTML = "Match Draw";
    }
    if(you==="paper"&&computer===1){
        document.querySelector('#winneresult').innerHTML = "Match Draw";
    }
    if(you==="scissor"&&computer===2){
        document.querySelector('#winneresult').innerHTML = "Match Draw";
    }
});
const restartButton = document.querySelector('#restartButton');

restartButton.addEventListener('click', (event) => {

    event.stopPropagation();

    document.querySelector('#img').removeAttribute('src');
    document.querySelector('#player-img').removeAttribute('src');

    document.querySelector('#winneresult').innerHTML = "";

});