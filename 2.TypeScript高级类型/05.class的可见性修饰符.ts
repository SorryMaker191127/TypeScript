/** 
 * 类成员可见性：可以使用TS来控制class的方法和属性对于class之外的代码是否可见
 * 包括：public(公有的) protected(受保护的) private(私有的)
 * public: 公有成员可以被任何地方访问,默认可见,可省略
 * protected: 仅在其声明所在类和子类中（非实例对象）可见
 * */

export class People {
    private name: string
    public walk(): void {
        console.log('people can walk !')
    }

    protected playSport(): void {
        console.log('people like play sport !')
    }

    introduce():void{
        console.log(`my name is ${this.name}`)
    }
}

export class Student extends People {
    study(): void {
        console.log('student study everyday !')
    }
    playFootball(): void {
        this.playSport();
        console.log('student like play football !')
    }
    myName():void{
    //  console.log(`student name is ${this.name}`) 错误！private属性只能在当前类中可见
    }
}

let stu01 = new Student()
stu01.walk()
// stu01.playSport() 错误！protected属性不能在实例对象中访问