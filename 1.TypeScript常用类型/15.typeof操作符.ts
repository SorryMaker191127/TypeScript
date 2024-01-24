/**
 * JS中，typeof操作符用来获取数据的类型
 * TS中，typeof可以在类型上下文中引用变量或属性的类型
 * 使用场景：根据已有的变量的值，获取该值的类型，简化类型书写
 */
let p = { x: 1, y: 2 };
//正常为参数定义数据类型
function addFun01(numbers: { x: number, y: number }): number {
    return numbers.x + numbers.y
}
addFun01(p)
//使用typeof引用已有变量数据类型
function addFun02(numbers: typeof p) {
    return numbers.x + numbers.y
}
addFun02(p)