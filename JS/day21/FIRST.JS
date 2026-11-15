// // // // //Created an element
// // // // function attach(content){
// // // // const element=document.createElement('li')
// // // // element.innerHTML =content
// // // // const element1=document.createElement('li')
// // // // element1.innerHTML =content="v2.0"
// // // // const parent =document.getElementById("root")
// // // // parent.append(element,element1)
// // // // }
// // // // attach("Ts")
// // // // attach("github")

// // // const element=document.createTextNode("hello coder army")
// // // const parent =document.getElementById("root")
// // // parent.append(element)

// // const element =document.createAttribute("id");
// // element.value="first";
// // const parent=document.getElementById('root')//give access to second list
// // const curr=parent.children[1]
// // curr.setAttributeNode(element)

// //access attribute of a element
// // const element=document.getElementById("root")
// // console.log(element.getAttribute("id"))
// // console.log(element.getAttribute("class"))

// // element.setAttribute("custom"/*key*/,"20"/*value*/)
// // element.removeAttribute("custom")


// /*Add nodes to the DOM*/

// const parent=document.getElementById("root")
// const element =document.createElement('li')
// element.innerHTML='TS'
// parent.prepend(element)//sabse aage add karne ke liye
// const element1 =document.createElement('li')
// element1.innerHTML='git hub'
// parent.append(element1)//last mein add karne ke liye
// const element2 =document.createElement('li')
// element2.innerHTML='react'
// const child2=parent.children[1];
// parent.insertBefore(element2,child2)//kisi node se pehle lagana 

// parent.replaceChild(element,child2)
// const element =document.createElement("div")
// element.innerHTML="hello Coder Army"
// parent.insertAdjacentElement("beforeBegin",element)


const parent=document.getElementById("root")
parent.children[1].remove()