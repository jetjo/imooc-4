// call - signatures - 调用签名.ts;
// type Add = (a: number, b: number) => number;
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debuggerName: string;
};

const add: Add = (a, b, c?) => {
  return a + b + (c || 0);
};

add.debuggerName = "加法器附加调试信息";

// 构造函数签名
// type Point = new (x: number, y: number) => { x: number, y: number; };
type Point = {
  new (x: number, y: number): { x: number; y: number; z?: number };
  new (x: number, y: number, z: number): { x: number; y: number; z?: number };
};

const point: Point = class {
  constructor(public x: number, public y: number, public z?: number) {}
};

console.log(new point(1, 2, 3));

export {};
