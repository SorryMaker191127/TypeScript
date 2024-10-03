//创建泛型类
//类似于泛型接口，在class后面添加<类型变量>，这个类就变成了泛型类
export class GenericNumber<NumType>{
    defaultValue: NumType
    add: (x: NumType, y: NumType) => NumType
}

const myNum = new GenericNumber<number>()
myNum.defaultValue = 10;
myNum.add = (x: number, y: number) => {
    return x + y
}
console.log(myNum.add(10, 20))

const myStr = new GenericNumber<string>()
myStr.defaultValue = "10"
myStr.add = (x: string, y: string) => {
    return x + y
}
console.log(myStr.add('10', '20'))