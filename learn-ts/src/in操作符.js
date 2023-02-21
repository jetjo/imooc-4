var _a;
/**
 *
 * @param shape in 操作符是js中的，用于判断右侧对象上或者其原型链上是否有以左侧为名称的成员
 * @returns
 */
function CalcArea(shape) {
    if ("width" in shape) {
        return shape.width * shape.height;
    }
    else {
        return shape.size * shape.size;
    }
}
var strObj = new String("qiuQiu");
console.log("length" in strObj);
console.log("3" in strObj);
// const str = 'qiuQiu'
// console.log('length' in str);// 报错
// console.log('3' in str);// 报错
var symProp = Symbol("symProp");
var obj = (_a = {
        undefinedProp: undefined
    },
    _a[symProp] = 111,
    _a);
console.log("undefinedProp" in obj);
console.log("nothingProp" in obj);
console.log(symProp in obj);
