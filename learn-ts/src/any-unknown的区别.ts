// any -unknown的区别.ts;
let var1: any = "";
var1 = 0;
var1 = true;
var1();

let var2: unknown = "";
var2 = 0;
var2 = true;
var2();

// NOTE: unknown类型虽然不能确定类型，但是能确保类型安全
