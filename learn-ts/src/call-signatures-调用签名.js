"use strict";
exports.__esModule = true;
var add = function (a, b, c) {
    return a + b + (c || 0);
};
add.debuggerName = "加法器附加调试信息";
var point = /** @class */ (function () {
    function class_1(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return class_1;
}());
console.log(new point(1, 2, 3));
