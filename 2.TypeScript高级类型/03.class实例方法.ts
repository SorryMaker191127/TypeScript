export class Student {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    introduce(pName: string): void {
        console.log(`Hello,${pName},I\`m ${this.name},I\`m ${this.age} years old !`)
    }
}

let student = new Student('zhangsan', 18);
student.introduce('lisi');