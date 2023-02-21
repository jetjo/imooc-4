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
function isRectangle(shape: Shape): shape is Rectangle {
  // function isRectangle(shape: Shape):boolean {
  return "width" in shape;
}

function CalcArea(shape: Shape) {
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  } else {
    return shape.size * shape.size;
  }
}

export default {};
