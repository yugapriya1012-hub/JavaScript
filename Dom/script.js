console.log("hello world")


var myBtn=document.getElementById('submitBtn');
myBtn.addEventListener('click',()=>{

})
var myDiv=document.createElement("div");
myDiv.style.width='500px';
myDiv.style.height='500px';
myDiv.style.border='1px solid black';
myDiv.style.color='white';
myDiv.style.backgroundColor='cornflowerblue'
myDiv.style.borderRadius='8px';
myDiv.style.fontSize='25px';
myDiv.style.display='flex';
myDiv.style.justifyContent='center';
myDiv.style.alignItems='center'



//add content innerText
myDiv.innerHTML

var content="Welcome to JavaScript"
myDiv.innerHTML= `<p>${content}</p>`



document.body.appendChild(myDiv)