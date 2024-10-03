let getLength = function (params: number | string) {
    //如果传入的参数为number类型,则找不到length属性,,使用类型断言 as 将类型断言为string
    console.log((params as string).length)
}

// 类型断言只能欺骗编写代码时的错误,不能修复代码运行时的错误

getLength('12345'); //5
getLength(12345);   //undefine

