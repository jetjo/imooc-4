// void -undefined - never类型的区别.ts;
function f1() {
  // function f1():undefined {
  //NOTE: 不写return，函数类型是void, 标记为undefined类型会报错
}

function f2(): undefined {
  return; // NOTE: 写上return，仍然被推断为void类型, 但准确说是undefined类型
}

function f4(): never {
  throw new Error("一个异常～"); //NOTE: 推断为void ，实际是never
}

function f5(): never {
  //NOTE：不标注的话，推断为void，实际为never
  while (true) {}
}
