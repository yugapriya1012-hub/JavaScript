const employees=[
    {
        name:"Arjun",
        role:"Developer",
        email:"arjun@example.com"
    },
    {
        name:"Sara",
        role:"Designer",
        email:"sara@example.com"    
    },
    {
        name:"Leo",
        role:"Manager",
        email:"leo@example.com"
    }
]

let container=document.createElement('div')
container.style.width = '100%';
container.style.display="Flex";
container.style.justifyContent="center";
container.style.alignItems="Center";
container.style.flexDirection="row";
container.style.border='1px solid blue'
 //step 1 :want to create a employee card
    for(let i=0; i<employees.length;i=i++){
        let myCard=document.createElement('div');

//step2: want to add emp name, role, and email by destructuring
        let{name,role,email}=employees[i];
        console.log(name,role,email);

//step3: open three separate span-> innerText->name,role,email
        let nameSpan=document.createElement('div');
        let roleSpan=document.createElement('div');
        let emailSpan=document.createElement('div');

        nameSpan.innerText=name;
        roleSpan.innerText=role;
        emailSpan.innerText=email;
// step4: i need to append name, role and email
//for employees
//option1
// if(role!="Manager"){
//     myCard.classList.add('card')
// }else if(role=="Manger"){
//     myCard.classList.add('card');
//     myCard.classList.add('manager-bg');
// }
//option2
   myCard.classList.add('card');

    if (role == 'Manager') {
        myCard.classList.add('manager-bg');
    }
    myCard.classList.add('card');
    myCard.appendChild(nameSpan);
    myCard.appendChild(roleSpan);
    myCard.appendChild(emailSpan);


//todo:step4: i want to append each
    container.appendChild(myCard);  
}
document.container.appendChild(myCard);
//document.body.appendChild(myCard);