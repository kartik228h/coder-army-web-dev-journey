// const red_button = document.getElementById('red');
// const blue_button = document.getElementById('blue');
// const green_button = document.getElementById('green');
// const orange_button = document.getElementById('orange');
// const purple_button = document.getElementById('purple');
// const body = document.getElementById('body');
// red_button.addEventListener('click', () => {
//   body.style.backgroundColor = 'red';
// });
// blue_button.addEventListener('click', () => {
//   body.style.backgroundColor = 'blue';
// });
// green_button.addEventListener('click', () => {
//   body.style.backgroundColor = 'green';
// });
// orange_button.addEventListener('click', () => {
//   body.style.backgroundColor = 'orange';
// });
// purple_button.addEventListener('click', () => {
//   body.style.backgroundColor = 'purple';
// });

// const buttons = document.querySelectorAll('button');
// const body = document.getElementById('body');
// buttons.forEach(button => {
//   button.addEventListener('mousemove', () => {
//     body.style.backgroundColor = button.id;
//   });
// });

const parent = document.getElementById('root');
parent.addEventListener('click',(event)=>{
console.log(event.target.id);
if(event.target.tagName === 'BUTTON'){
body.style.backgroundColor = event.target.id;}
})