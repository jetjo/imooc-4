const person = {
  name: "bing",
  age: "18",
};

function getValueByKey(obj, key) {
  return obj[key];
}

console.log(getValueByKey(person, "email")); //NOTE: person对象中没有email属性！！！， 但是未报错

// NOTE: 改进

function getValueByKey1(obj, key: keyof typeof person) {
  return obj[key];
}
console.log(getValueByKey1(person, "email"));

// NOTE: 改进
type Person = typeof person;

function getValueByKey2(obj: Person, key: keyof Person) {
  return obj[key];
}
console.log(getValueByKey2(person, "email"));

// NOTE: 改进 泛型化

function getValueByKey3<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
console.log(getValueByKey3(person, "email"));
console.log(getValueByKey3(person, "name"));

function setValueByKey3<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}
setValueByKey3(person, "age", 10);
setValueByKey3(person, "age", "10");
setValueByKey3(person, "email", "10");
