interface IPoint {
  x: number;
  //   readonly _x: number;
  y: number;
  calcDistance: (p: IPoint) => number;
}

class Point implements IPoint {
  constructor(private _x: number, private _y: number) {}
  private static _validator(val: number): never | void {
    //  const _validator = (val:number)  => {
    // private function _validator(val:number):never|void {
    if (val < 0) throw new Error("...");
  }
  get x() {
    return this._x;
  }
  set x(val) {
    Point._validator(val);
    this._x = val;
  }
  get y() {
    return this._y;
  }
  set y(val) {
    Point._validator(val);
    this._y = val;
  }

  calcDistance(p: IPoint) {
    return Math.pow(this._x - p.x, 2) + Math.pow(this._y - p.y, 2);
  }
}
