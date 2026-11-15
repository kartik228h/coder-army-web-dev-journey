const grandparent=  document.getElementById('grandparent');
const parent=  document.getElementById('parent');
const child=  document.getElementById('child');
//event bubbling and event capturing
//by default bubbling chalta hai
child.addEventListener('click', (event) => {
    console.log('child clicked');
    event.stopPropagation(); //stop bubbling
})

 //true means capturing phase
parent.addEventListener('click', () => {
    console.log('parent clicked');
}) //true means capturing phase
grandparent.addEventListener('click', () => {
    console.log('grandparent clicked');
    console.log(event.target.id);
}) //true means capturing phase

//event delegation
