 var inputBox=document.getElementById("sent")
    // console.log(InputBox);

    var myButton=document.getElementById("myBtn")
    // console.log(myButton);

    
    myButton.addEventListener("click",()=>{
        let sentence=inputBox.value;

        let words=sentence.split(",");
         console.log(words)

    });
    for(let i=0;i<word.length;i=i++){
        //step1:create a word create(type div)
        let card=document.createElement('div');
        //step2: add required styling like border,fontsize,etc
        card.style.border='1px solid #a1a1a1'
        card.style.borderRadius='8px'
        card.style.padding='10px'
    }
    //step 3: include the word inside the word card
    card.innerText=words[i]

    //step4 append the card to the xe
    



// var sentence="JavaScript is nice"
// let word=sentence.split(" ");
// console.log(word)