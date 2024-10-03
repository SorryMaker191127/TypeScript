/**
 * 函数中参数和返回值很可能不属于同一种类型，因此泛型的类型变量可以有多个，并且变量之间还可以约束（比如第二个类型变量受第一个类型变量约束）
 */
//例如：创建一个函数来获取对象中属性的值
export function getPropValue<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
/**
 * 添加了第二个变量类型Key，用,分隔
 * keyof关键字接收一个对象类型，生成其键名称（可能时字符串或数字）的联合类型
 * 示例中keyof Type获取的是person对象所有键的联合类型，即 'name'|'age'
 * 因此Key受Type约束，key只能是Type所有键中的任意一个，或者说只能访问对象中存在的属性
 */

let person = { name: 'jack', age: 19 }

//getPropValue(person,'run')            错误！Key类型受到Type变量约束，只能时obj已有的属性类型
getPropValue(person,'name') 