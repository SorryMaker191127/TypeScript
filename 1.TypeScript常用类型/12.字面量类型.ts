/**
 * 通过类型推论
 * str1的类型为string
 * str2的类型为'Hello'
 * 解释：
 *  str1是一个变量，它可以是任意字符串，所以类型为string
 *  str2是一个常量，它的值不能变化，只能是'Hello',所以它的类型是'Hello'
 * 
 * TS中某个特定的字符串可以作为TS中的类型，任意的JS字面量（对象，数字等）都可以作为类型使用
 */
let str1 = 'Hello';
const str2 = 'Hello';

//定义字面量类型
const str3: 'str' = 'str'
let age: 18 = 18

//字面量类型一般和联合类型一起使用，表示一组明确的可选值列表
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
    console.log(direction)
}
changeDirection('up')