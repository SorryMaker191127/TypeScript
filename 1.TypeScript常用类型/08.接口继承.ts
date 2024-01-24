//当两个接口之间有相同的属性和方法，可以将公共的属性和方法抽离，通过继承来实现复用
//通过extends关键字实现继承
interface Person {
    name: string,
    age: number
}
interface Student extends Person {
    study: string
}
interface Teacher extends Person {
    teach: string
}

let stu: Student = {
    name: 'zhangsan',
    age: 18,
    study: 'Math'
}

let teac: Teacher = {
    name: "Bob",
    age: 33,
    teach: 'English'
}
