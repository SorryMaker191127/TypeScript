import { log } from "console";

//1.生成器 generater函数
function* gen() {
    yield Promise.resolve("A"); //支持同步和异步
    yield 'B';
    yield 'C';
    yield 'D';
}
const letter = gen();
console.log(letter.next()); //{ value: Promise { 'A' }, done: false }
console.log(letter.next()); //{ value: 'B', done: false }
console.log(letter.next()); //{ value: 'C', done: false }
console.log(letter.next()); //{ value: 'D', done: false }
console.log(letter.next()); //{ value: undefined, done: true }



//set和 map
let set: Set<number> = new Set([1, 2, 2, 3, 4, 5, 5, 6]); // 天然去重
console.log(set); //Set(6) { 1, 2, 3, 4, 5, 6 }

let map: Map<any, any> = new Map();
let obj: any = {};
let arr: any = []
//map的key可以是一个引用类型
map.set(obj, 'mapObjValue');
map.set(arr, 'mapArrayValue');
console.log(map.get(obj)); //mapValue

//类数组
function args() {
    console.log(arguments) //伪数组
}

//2.迭代器 遍历上述各种数据类型 Symbol.iterator
const each = (value: any) => {
    let itr: any = value[Symbol.iterator]();
    let next: any = { done: false };
    while (!next.done) {
        next = itr.next();
        if (!next.done) {
            console.log(next.value)
        }
    }
}
each(map)
//[ {}, 'mapObjValue' ]
//[ [], 'mapArrayValue']
/**
 * 迭代器的语法糖 for of,但是for of不适用对象类型,因为对象没有Symbol.iterator
 * 解构的底层原理也是调用Symbol.iterator
 */
// 手动实现对象的 for of
Object.prototype[Symbol.iterator] = function () {
    console.log(Object.keys(this))
    console.log(Object.keys(this).length)
    let _this = this;
    return {
        _properArray: Object.keys(this),
        _properLength: Object.keys(this).length,
        _current: -1,
        next() {
            console.log(this._current)
            console.log(this._properLength);
            if (this._current == this._properLength) {
                return {
                    done: true
                }
            } else {
                this._current++
                return {
                    value: _this[this._properArray[this._current]],
                    done: false
                }
            }
        }
    }
}
let _obj = {
    a: 123, b: 456, c: 789, d: "321",
}
for (const element of _obj) {
    console.log('element:', element)
}




