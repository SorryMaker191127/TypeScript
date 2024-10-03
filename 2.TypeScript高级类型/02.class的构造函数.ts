/**
 * 构造函数
 */
export class People {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
let people = new People("zhangsan", 18)
/**
 * 1.成员初始化后，才能通过this访问实例成员
 * 2.需要为构造函数指定类型注解，否则会被隐式推断为any
 * 3.构造函数不需要返回值类型
 */