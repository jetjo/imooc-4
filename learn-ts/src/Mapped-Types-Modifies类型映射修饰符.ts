// Mapped - Types - Modifies类型映射修饰符.ts;
// NOTE: 类型映射修饰符有：
// readonly
// ？
// -readonly 取消原来的只读
// -? 取消原来的可选

type typeReadonlyPartial = {
  readonly name: string;
  age: number;
  email?: string;
};

type cancelReadonlyPartial<T> = {
  -readonly [k in keyof T]-?: T[k];
};

type typeCommon = cancelReadonlyPartial<typeReadonlyPartial>;

class State<T> {
  constructor(public current: T) {}
  update(next: T) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });

state.update({ y: 9 });

// NOTE: 改进
class State1<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state1 = new State1({ x: 0, y: 0 });

state1.update({ y: 9 });
