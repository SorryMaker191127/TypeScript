//数组类型两种写法,推荐第一种
let numberArray01: number[] = [1, 2, 3, 4];
let numberArray02: Array<number> = [1, 2, 3, 4];

//多维数组
let multiNumberArray01: number[][] = [[1], [2, 3], [4]];
let multiNumberArray02: Array<Array<number>> = [[1], [2, 3], [4]];

//联合类型：当数组中有多种类型数据，采用联合类型
let uniArray: (number | string | undefined)[] = [1, "2", 3, undefined];

//使用interface定义对象数组
interface Obj {
    name: string,
    age?: number
}

let objArray: Obj[] = [
    { name: "张三", age: 18 },
    { name: "李四" }
]

