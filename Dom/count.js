let incBtn=document.getElementById('increment');
let decBtn=document.getElementById('decrement');
let resetBtn=document.getElementById('reset');
let finalNumber=document.getElementById('finalResult')

//read my input box always and store its value in a variable
let stepperFunction=document.getElementById('myInput');
let newCount=stepperFunction.value;
// console.log(stepperFunction.value)
incBtn.addEventListener('click',()=>{
    let temp=finalResult.innerText;
    // convert to number
    let count=parseInt(temp);
    newCount=stepperFunction.value;
    count=count+parseInt(newCount);
    // value increment
    finalResult.innerText=count;

});

decBtn.addEventListener('click',()=>{
    let temp=finalResult.innerText;
    let count=parseInt(temp);
    count=count-parseInt(newCount);
    finalResult.innerText=count;

});

resetBtn.addEventListener('click',()=>{
    finalResult.innerText=0;

});

