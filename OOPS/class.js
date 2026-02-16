class students {
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    display_details(){
        return `Name: ${this.name}  Age: ${this.age} Marks: ${this.marks}`
        
    }

    avg(){
    let sum=0;
    for(let i=0;i<this.marks.length;i=i+1){
        sum+=this.marks[i]
    }
    return sum/this.marks.length
}

};


const s1= new students("John",20,[29,45,90,38,45]);
console.log(s1.display_details());

console.log(s1.avg());