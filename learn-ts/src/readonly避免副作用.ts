function reverseSorted(input: number[]): number[] {
  return input.sort().reverse();
}

const x = [3, 6, 1, 2];
const y = reverseSorted(x);

x === y; //true

// NOTE: 上面的代码不是纯函数，因为他修改了出入的参数，产生了副作用
// NOTE: 改造

//纯函数，不修改外部作用域的变量，输入和输出之间是确定的单一映射
function reverseSorted1(input: number[]): number[] {
  //   return input.slice().sort().reverse();
  return [...input].sort().reverse();
}
