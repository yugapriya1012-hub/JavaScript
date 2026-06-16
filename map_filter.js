let mark=[87,91, 88,93,81];
var total =mark.map((m)=>{
    let newMarks=m+5
    return newMarks;
    })
console.log(total)


// let fruits=["apple","orange","grape"];
// var allFruits=fruits.map((f)=>{
//     let x=(f.toUpperCase());
//     return x;
// })
// console.log(allFruits)

// let numbers=["90","33","17"];
// var changeInt = numbers.map((el,index,list)=>{
    // console.log(el,index,list)
    // // let x=parseInt(el);
    // // return x;
// })
// console.log(changeInt)


// let temperature=[28,29,27,12,24];
// let maxTemp=temperature.filter((eachDay)=>{
//     if (eachDay>25){
//         return eachDay;
//     }
// });
// console.log(maxTemp)


// let numbers=[55,26,17,0,23,9,0,81];
// let greaterZero=numbers.filter((zeroNumber)=>{
//     if (zeroNumber >0){
//         return zeroNumber;
//     }
// });
// console.log(greaterZero)


// let numbers=[3,7,12,18,21];
// let divisible=numbers.filter((num)=>{
//     if(num%3==0){
//         return num
//     }
// });
// console.log(divisible)

// let age=[12,18,21,14,25,16,30];
// let above=age.filter((el)=>{
//     if(el>=18){
//         return el
//     }
// });
// console.log(above);


// let names=["John","Steve","Ravi"];
// let latest_names=names.map((eachName)=>{
//     return "Mr." + eachName;
// });
// console.log(latest_names)