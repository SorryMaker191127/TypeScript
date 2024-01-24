/**
 * 相同点：都可以给对象指定类型
 * 不同点：
 *          接口：只能为对象指定类型
 *          类型别名：可以为任意类型指定别名   
 * 类型别名使用=号，接口没有=号       
 */
type myStudent = {
    name: string,
    age: number
}
const student: myStudent = {
    name: 'zhangsan',
    age: 18
}

interface myTeacher {
    name: string,
    age: number,
    subject: string
}

const teacher: myTeacher = {
    name: 'Helen',
    age: 35,
    subject: 'English'
}

//类型别名指定其它类型
type myAdd = (num1: number, num2: number) => number
const addFun: myAdd = (num1, num2) => {
    return num1 + num2
}
console.log(addFun(1, 3))
