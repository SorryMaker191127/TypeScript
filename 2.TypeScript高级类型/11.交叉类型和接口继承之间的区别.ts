/**
 * 相同点：都能实现对象类型的组合
 * 不同点：对于同名属性之间，类型冲突的处理方式不同
 */
export interface A {
    value: string
}
// export interface B extends A {
//     value: number              错误！使用extends,相同属性名，属性类型不同，会产生类型冲突
// }

export interface B {
    value: number
}

type C = A & B //正确，交叉类型会合并相同属性的不同属性类型，类似 interface C { value: string|number } 