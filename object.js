// let person = {
//     name:"yuga",
//     age:18,
//     gender:"female",
//     state:"tamilnadu"
// };
// console.log(person.name);



// Class

let myProduct={
    productName:"Cake",
    id:1,
    price:399,
    availability:true
}
// it give elements in list
//print keys
console.log(Object.keys(myProduct))

//print value
console.log(Object.values(myProduct))

//it give elements in line by line
//print key all
for(let key of Object.keys(myProduct)){
    console.log(key)
}
//print value of myProduct
for(let value of Object.values(myProduct)){
    console.log(value)
}