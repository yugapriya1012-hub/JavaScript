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
