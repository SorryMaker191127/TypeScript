//更准确的说法：对于对象类型来说，y的成员至少与x相同，则x兼容y(成员多的赋值给成员少的)
export class Point2D {
    x: number
    y: number
}
export class Point3D {
    x: number
    y: number
    z: number
}

let point: Point2D = new Point3D()
/**
 * Point3D成员至少与Point2D相同，Point2D则兼容Point3D
 * 所以成员多的Point3D可以赋值给成员少的Point2D
 */

//接口之间的兼容性类似class
export interface Point2DInter {
    x: number
    y: number
}

export interface Point3DInter {
    x: number
    y: number
    z: number
}

let p2d: Point2DInter
let p3d: Point3DInter = {
    x: 123,
    y: 234,
    z: 345
}
p2d = p3d

//calss和接口之间也兼容
let pointP: Point2DInter = new Point2D()