//当一个对象类型被多次使用，一般会使用接口(interface)来描述对象的类型
//使用interface关键字来声名接口
interface Students {
    name:string,
    age:number,
    sex:string,
    favourite?:string,

}

let stu01:Students ={
    name :"zhangsan",
    age:13,
    sex:"male",
    favourite:"Math"
}

let stu02:Students ={
    name :"lisi",
    age:16,
    sex:"female",
}