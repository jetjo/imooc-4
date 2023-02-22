// index.ts
let name = "elvis";

// NOTE: immutable: 如果不创建全新的值替换他，则无法改变他们的内容
// NOTE: 字符串和数字等原始类型的值就是不可变的 immutable
// NOTE: 可以像如下这样访问字符串某个索引处的字符：
console.log(name[2]);
// // NOTE: 但是却不能更改：
// name[2] = '7'
// NOTE: 即使对字符串变量重新赋值，也只是在内存中重新分配了一块区域放了一个新的变量值，原来的字符串区域并没有改变
name = "xxx";

// SECTION
// NOTE: 而对象和数组默认却是可变的
// NOTE: 使用const关键字只能保证变量整体不变，去不能保证其内部的成员，即js中的const不能是的变量immutable
const obj = {
  name: "xxx",
};
const arr = ["x", "x", "x"];
obj.name = "yyy";
arr[2] = "y";

// NOTE: 而ts中的const断言则可以做到使得对象和数组immutable ,在js中可以使用Object.freeze方法从运行时层面做到
const obj1 = {
  name: "xxx",
  prices: [3000, 8000, 10000],
} as const;
const arr1 = ["x", "x", "x"] as const;
obj1.name = "yyy";
obj1.prices[0] = 20000;
type price0 = typeof obj1.prices[0]; //NOTE: 使用const断言后底层类型全变为了字面量类型！！！
arr1[2] = "y";
// SECTION

let turn: "left" | "right" = "left";
let turn1: "left" | "right" = "left";
let rightTurn = "right";
turn = rightTurn;
const rightTurn1 = "right";
turn = rightTurn1;
let rightTurn2 = "right" as const;
rightTurn2 = turn1; //NOTE: 不可以将范围更广的类型赋值给范围窄的类型
turn = rightTurn2;
rightTurn2 = turn;

export {};
