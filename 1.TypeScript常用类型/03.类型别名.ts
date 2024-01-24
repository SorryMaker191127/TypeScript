//类型别名（自定义类型）：为任意类型起别名
//使用场景：当一种(复杂)类型被多次使用，可以通过类型别名，简化该类型的使用

//使用type关键字来创建类型别名
type myUniArray = (number | string | null | undefined)[];
let uniArray01: myUniArray = [1, '2', null, undefined];
let uniArray02: myUniArray = [5, '99', undefined, null];