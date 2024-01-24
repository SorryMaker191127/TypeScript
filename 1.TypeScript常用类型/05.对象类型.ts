//JS中对象包含属性和方法，TS中对象类型就是再描述对象额结构
let person: { name: string; age: number; sex: string; isStudent: boolean; playSports(): void; study: () => string } =
{
    name: 'zhangsan',
    age: 14,
    sex: 'male',
    isStudent: false,
    playSports() {
        console.log('I can play football');
    },
    study() {
        return 'I like study English !'
    }
}
//对象也具有可选属性
let pet: { name?: string, age: number, isDog: boolean } =
{
    age: 3,
    isDog: false
}