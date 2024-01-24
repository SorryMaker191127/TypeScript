//在TS中，某些没有明确指出类型的地方，TS可以通过类型推论机制帮助提供类型
//常见场景：1.变量声明并直接初始化时。2.决定函数返回值时
let age = 19;
function add(num1: number, num2: number) {
    return num1 + num2
}