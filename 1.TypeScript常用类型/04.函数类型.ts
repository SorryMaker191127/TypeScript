//函数类型：函数参数和返回值的类型
//分两种情况：
//1.单独指定参数，返回值的类型
function addFun01(num1: number, num2: number): number {
    return num1 + num2;
}
const addFun02 = function (num1: number, num2: number): number {
    return num1 + num2;
}
//2.同时指定参数和返回值类型(只适用于函数表达式)
const addFun03: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2;
}

//当函数没有返回值，返回值类型为void
const printFun = function (str: string): void {
    console.log(`this is ${str}`);
}

//当函数某个参数可传也可不传的时候，之中情况下给参数指定类型，要使用可选参数
//注意：可选参数后面不能再出现必选参数！
function addPlusFun(num1: number = 10, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}