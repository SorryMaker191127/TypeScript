/**
 * 泛型工具类型：TS内置了一些常用的工具类型，来简化TS中的一些常见操作
 * 说明：他们是基于泛型实现的（适用于多种类型，更通用），并且是内置的，可以在代码中直接使用
 * 主要有 Partial<Type> Readonly<Type> Pick<Type,Keys> Record<Keys,Type>
 */

//1.Partial<Type> 用来构造（创建）一个类型，将Type的所有属性设置为可选
export interface People {
    name: string
    age: number
    job: string
}
//peo01为接口People类型，接口中的属性都不能缺少
let peo: People = {
    name: 'zhangsan',
    age: 22,
    job: 'teacher'
}

//使用Partial构建一个新类型PartialPeople,结构和People相同，但所有属性变为可选
type PartialPeople = Partial<People>
let parPeo: PartialPeople = {
    name: 'lisi',
    age: 32
}

//使用Readonly构建一个新类型ReadonlyPeople,结构和People相同，但所有属性变为只读
type ReadonlyPeople = Readonly<People>
let redonPeo: ReadonlyPeople = {
    name: 'wangwu',
    age: 23,
    job: 'doctor'
}
//redonPeo.age = 33         错误！属性为readonly,不可以再修改

//使用Pick从People中选择一组属性来构建一个新类型PickPeople,
type PickPeople = Pick<People, 'age' | 'name'>
let pickPeo: PickPeople = {
    name: 'zhaoliu',
    age: 21
}
/**
 * Pick两个参数，1.表示要选择谁的属性。2.选择哪几个属性（如果只选择一个，则只传入该属性名，并且必须是第一个类型变量中存在的属性）
 * 构造出的新类型只具有选出的属性
 */

//使用Record构建一个对象类型RecordPeople,属性键为Keys,属性类型为Type
type RecordObj = Record<'age' | 'name', string>
let recordObj: RecordObj = {
    name: 'zhaoliu',
    age: "21"
}
/**
 * Record有两个类型变量：1.表示对象有哪些属性.2.表示对象属性的类型
 */
