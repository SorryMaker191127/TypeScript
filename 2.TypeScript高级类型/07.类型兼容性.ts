/**
 * 类型兼容性
 * 两种系统：1Structrul Type System(结构化类型系统) 2Nominal Type Systen(标明类型系统)
 * TS采用的时结构化类型系统，类型检查关注的时值所具有的形状
 * 也就是说，结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类
 */
export class People {
    name:string
    age:number
}

export class Person {
    name:string
    age:number
}

let p:People = new Person()
/**
 * People和Person是两个不同名称的类名
 * 变量p被显示标注为People类型，但是确实Person的实例，没有类型错误
 * 因为TS是结构类型系统，只检查Person和People结构是否相同，（具有相同属性，并且属性类型也相同）
 * 在标明类型系统中，他们是不同的类，类型无法兼容
 */