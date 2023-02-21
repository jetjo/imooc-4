// index - signatures - 索引签名.ts;
const personDict = {
  柳如是: {
    name: "柳如是",
    email: "xx@qq.com",
  },
  ["董小宛"]: {
    name: "董小宛",
    email: "ss@qq.com",
  },
};

// NOTE: 问题：如何为上面的对象声明类型呢？显然上面的对象的成员名称是不确定的
// NOTE: 像下面这样肯定不灵活
type PersonDictType = typeof personDict;

type Person = {
  name: string;
  email: string;
};

type PersonDict = {
  [name: string]: Person;
};

const personDict1: PersonDict = {
  柳如是: {
    name: "柳如是",
    email: "xx@qq.com",
  },
  ["董小宛"]: {
    name: "董小宛",
    email: "ss@qq.com",
  },
};

type PersonDictType1 = typeof personDict1;

const liu = personDict1["柳如是"];

personDict["yangbing"] = {
  nam: "yangbing",
  email: "yy@qq.com",
};

personDict1["yangbing"] = {
  // nam: 'yangbing',
  name: "yangbing",
  email: "yy@qq.com",
};

//NOTE: 访问一个悬空的成员不会报错！！！！！！！

const nobody = personDict1["nobody"];

nobody.name = "nobody"; //NOTE: 这里，typescript编译器未报错，nobody是undefined！！！
