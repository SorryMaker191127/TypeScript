//交叉类型（&）：类似于接口继承（extends），用于组合多个类型为一个类型（常用于对象类型）
export interface Person {
    name: string
}

export interface Contact {
    phone: number
}

type PersonDetail = Person & Contact
 
let personDetailObj: PersonDetail = {
    name: 'zhangsan',
    phone: 1234567890
}