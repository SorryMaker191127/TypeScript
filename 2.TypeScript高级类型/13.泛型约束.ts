/**
 * 泛型约束：默认情况下，泛型Type可以代表多个类型，但是可能某些类型不符合，导致意外的错误，因此需要为泛型添加约束条件来收缩类型（缩小类型取值范围）
 */

//例如：根据参数，返回参数的长度length,但是Type类型不一定包含length属性
// export function printLength<Type>(value: Type): void {
//     console.log(value.length)                        错误！当Type类型为number时，就没有length属性
// }

//泛型约束：
//1.指定更加具体的类型
export function returnLength01<Type>(value: Type[]): Type[] {
    console.log(value.length)                           //正确！将类型指定为Type类型的数组，数组就一定存在length属性
    return value
}
//2.添加约束
export interface HaveLength {
    length: number
}
export function returnLength02<Type extends HaveLength>(value: Type): Type {
    console.log(value.length)
    return value
}
/**
 * 创建描述约束的接口HaveLength,该接口要求包含length属性
 * 通过extends关键字使用该接口，为泛型添加约束
 * 该约束标明：传入的参数类型必须含有length属性
 */

let result = returnLength02('string') //正确，string类型包含length属性
//let result = returnLength02(123456)   错误！number类型不包含length属性