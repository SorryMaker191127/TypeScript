/**
 * JS中继承只有extends
 * TS中继承有两种方式:1.extends(继承父类) 2.implements(实现接口)
 */
export class Animal {
    run() {
        console.log('this animal can run !')
    }
}
//extents继承
export class Cat extends Animal {
    catchMouse() {
        console.log('cat can catch mouse !')
    }
}

let cat = new Cat()
cat.run()
cat.catchMouse()

//implement继承
//通过implement关键字让class实现接口中的属性和方法
//类中必须提供接口中指定的所有方法和属性
interface People {
    name:string
    walk(): void
}

export class Student implements People{
    name: string
    walk(): void {
        console.log('student can walk !')
    }
}