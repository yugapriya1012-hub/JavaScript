// const promise=new Promise((resolve,reject)=>{
//     resolve("Success")
// })
// promise.then(data=>{
//     console.log(data)
// })


// isThere=false
// function waitINQueue(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(isThere){
//                 resolve('Buy product')
//             }
//             else{
//                 reject('Product  finished')
//             }
        
//     },1000);
//     });
// }

// function buyproduct(){
//     waitINQueue().then((message)=>{
//         console.log(message)
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("Go Home");
//     })
// }
// buyproduct()

//USE ASYNC & AWAIT

// isThere=false
// function waitINQueue(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (isThere){
//                 resolve("Buy Product")
//             }
//             else{
//                 reject("Product is finished")
//             }
//         },1000)

//     })
// }

// async function buyproduct(){
//     try{
//         let result=await waitINQueue();
//         console.log(result)
//     }
//     catch(error){
//         console.log('Product is Over')
//     }
// }
// buyproduct()

