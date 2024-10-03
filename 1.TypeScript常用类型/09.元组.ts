//元组：元组类型是另一种类型的数组，它确切的知道包含多少个元素，以及特定索引对应的类型
//普通数组：只表面数组中包含的元素类型，不指定数组长度与特定索引的类型
let positon: [number, number] = [39.5347, 119.2371];
//不希望元组的数据被修改,可以添加readonly修饰符
let subject: readonly [string, string, string] = ['Chinese', 'English', 'Math'];
//元组的某个元素不确定时,可以使用?
let myArray: [number, boolean, string, isnull?: null] = [12, false, "123"]