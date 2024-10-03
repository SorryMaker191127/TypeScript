/**
 * 映射类型：基于旧类型创建新类型（对象类型），减少重复
 */
type PropKeys = 'x' | 'y' | 'z'
type Type1 = { x: number, y: number, z: number }
//PropKeys有x/y/z，Type1中也有x/y/z,并且Type1中x/y/z类型相同，就可以使用映射类型
type Type2 = { [key in PropKeys]: number }
/**
 * 映射类型是基于索引签名的，所以使用了[]
 * key in PropKeys 表示Key可以是联合类型PropKeys中的任意一个
 * Type1和Type2的结构完全相同
 * 注意：映射类型只能在别名中使用，不能在接口中使用
 */

//当旧类型是一个对象时，使用旧类型的键创建新类型
type Props = { a: number, b: number, c: number }
type Type3 = { [key in keyof Props]: number }
/**
 * 首先执行keyof Props获取到Props中所有键的联合类型，即'a'|'b'|'c'
 * key in就表示Key可以是Props键的联合类型中的任意一个
 */