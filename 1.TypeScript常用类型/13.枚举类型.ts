//枚举的功能类似于字面量+联合类型的组合功能，都表示一组明确的可选值
//枚举：定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个
//使用关键词enum

//数字枚举成员是有值的，默认从0开始自增
enum Direction { up, down, left, right }
//也可以为枚举成员的值做初始化,后续枚举成员值自增
enum Direction01 { up = 10, down, left, right }
//也可以为枚举成员分别赋值
enum Direction02 { up = 2, down = 4, left = 8, right = 10 }

//字符串枚举没有自增行为，因此字符串枚举的每个成员必须有初始值
enum DirectionStr { up = 'UP', down = 'DOWN', left = 'LEFT', right = 'RIGHT' }

function changeDirection(direction: Direction): void {
    console.log(direction)
}
//访问枚举成员
changeDirection(Direction.up) // 0

/**
 * 注意：其它类型在编译为js代码时会自动移除，但是枚举类型会被编译成JS代码
 *      一般情况下，推荐使用字面量+联合类型组合的方式，相比于枚举，更加直观，简洁，高效
 */