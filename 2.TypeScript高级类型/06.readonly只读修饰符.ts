//readonly表示只读，用来防止在构造函数之外对属性进行赋值，只能修饰属性，不能修饰方法
export class Person {
    readonly age:number
    constructor(age:number){
        this.age = age
    }
    // setAge(age:number){
    //     this.age = age  错误！只读属性只能在构造函数内修改
    // }
}

//readonly也可以表示接口或者{}的对象类型
interface IPerson {
   readonly name:string
}

let iPer:IPerson ={ 
    name:"jack"
}

//iPer.name = 'sam' 错误！