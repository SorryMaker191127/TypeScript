/**
 * 泛型接口：接口也可以配合泛型来使用，以增加其灵活性，增强其复用性
 */
export interface ValueFun<Type> {
    value: (arg: Type) => Type
    values: () => Type[]
}

let obj: ValueFun<number> = {
    value(arg) {
        return arg
    },
    values() {
        return [0, 1, 2, 3, 4]
    }
}

/**
 * 在接口名称后面添加<类型变量>，那么，这个接口就变成了泛型接口
 * 接口的类型变量，对接口中的其它成员可见，也就是接口中的所有成员都可以使用类型变量
 * 使用泛型接口时，需要显式指定具体的类型
 */