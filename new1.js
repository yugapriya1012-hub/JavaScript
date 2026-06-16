<<<<<<< HEAD
let students=[81,91,78,89,87,68,32,12,23]

// const result=students.map(students=>students+5)
// console.log(result)

// const result=students.filter(students=>students>35)
// console.log(result)

// const result=students.find(students=>students>90)
// console.log(result)

// let user={
//  name:"yuga",
//  age:19
// }

// const {age}=user
// console.log(age)


// let result="Success";
// function greet(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (result){
//                 resolve("Loading success");
//             }
//             else{
//                 reject("Not working");
//             }
//         },2000)

//     });
// }
// async function wish(){
//     try{
//         let res=await greet();
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// wish()


// const calculator=(a,b,operator)=>{
//     if(operator==='+')
//         return a+b;
//     if(operator==='-')
//         return a-b;
//     if(operator==='*')
//         return a*b;
//     if(operator==='/')
//         return a/b; 
//     return 'Invalid Operator'
// }
// console.log(calculator(2,4,'+'))

=======
class Students {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks; 
    }

    getAverage() {
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        return sum / this.marks.length;
    }
}

// object creation
const student1 = new Students("Yuga", 20, [80, 90, 85]);

console.log(student1.getAverage()); // 85
>>>>>>> 09a3633a3a937f6f32a2c9dfc95d9dc9e01d08df
