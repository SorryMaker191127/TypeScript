/**
 * 函数之间的类型兼容性比较复杂，需要考虑1.参数个数 2.参数类型 3.返回值类型
 */
//1.参数个数，参数多的兼容餐宿少的（或者说参数少的可以赋值给参数多的）,例子：Array.forEach()可传入1个，2个，或者3个参数等
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
let f1: F1 = (a: number): void => {
    console.log(a)
}
let f2: F2 = f1

//2.参数类型，相同位置的参数类型要相同（原始类型）或兼容（对象类型）
type F3 = (arg: { a: number }) => void
type F4 = (arg: { a: number, b: string }) => void
let f3: F3 = (arg: { a: number }): void => {
    console.log(arg.a)
}
let f4: F4 = f3

//3.返回值类型，只关注返回值类型本身即可
type F5 = () => string
type F6 = () => string | number

let f5: F5 = (): string => {
    return 'f5'
}
let f6: F6 = f5