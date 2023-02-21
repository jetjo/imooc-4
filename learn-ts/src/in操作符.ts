type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

/**
 *
 * @param shape in 操作符是js中的，用于判断右侧对象上或者其原型链上是否有以左侧为名称的成员
 * @returns
 */
function CalcArea(shape: Shape) {
  if ("width" in shape) {
    return shape.width * shape.height;
  } else {
    return shape.size * shape.size;
  }
}

const strObj = new String("qiuQiu");
console.log("length" in strObj);
console.log("3" in strObj);

// const str = 'qiuQiu'
// console.log('length' in str);// 报错
// console.log('3' in str);// 报错

const symProp = Symbol("symProp");

const obj = {
  undefinedProp: undefined,
  [symProp]: 111,
};
console.log("undefinedProp" in obj);
console.log("nothingProp" in obj);
console.log(symProp in obj);

export default {};
