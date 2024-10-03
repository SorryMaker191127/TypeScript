//当一个对象类型被多次使用，一般会使用接口(interface)来描述对象的类型
//使用interface关键字来声名接口
interface Students {
    name: string,
    age: number,
    sex: string,
    //可选操作
    favourite?: string,
    //当还有其它属性不需要全部被明确定义时,可以使用索引签名
    [propName: string]: any
}

let stu01: Students = {
    name: "zhangsan",
    age: 13,
    sex: "male",
    //可选属性
    favourite: "Math"
}

let stu02: Students = {
    name: "lisi",
    age: 16,
    sex: "female",
    //没有被约束的属性
    height: '170cm',
    weight: '65kg'
}

//interface 定义函数类型
interface Fn {
    (num1: number, num2: number): number[]
};

const fn: Fn = function (num1: number, num2: number) {
    return [num1, num2]
}