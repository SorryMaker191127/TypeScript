/**
 * TS全面支持ES6中的class关键字，并为其添加了类型注解和其它语法（可见性修饰符等）
 * TS中的class,不仅提供了class的语法功能，也作为一种类型存在
 */

export class Person {
    age: number
    sex: string
    isStudent = false
}

const person = new Person()
person.age = 18
person.sex = 'male'
person.isStudent = true