function reverse(e: string): string;
function reverse(e: string[]): string[];
// 如果不给reverse函数声明上面两行的签名（多重声明），则以后调用reverse返回的变量都被推断为了string和string[]的联合类型，
// 而不能根据参数类型精确到string或string[]类型;
function reverse(e: string | string[]) {
  if (typeof e === "string") {
    return e.split("").reverse().join("");
  } else {
    return e.slice().reverse();
  }
}

const str = reverse("hello");
const strArray = reverse(["h", "e", "l", "l", "o"]);

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number) {
  if (null != month && null != day) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear);
  }
}

const date1 = makeDate(2023, 12, 23);
const date2 = makeDate(1234567890);
// const date3 = makeDate(2023, 1) // 运行时逻辑错误

//NOTE: 不同于其他语言，ts的重载是编译时行为
