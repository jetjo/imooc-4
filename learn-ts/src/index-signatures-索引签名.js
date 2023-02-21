var _a, _b;
// index - signatures - 索引签名.ts;
var personDict = (_a = {
        柳如是: {
            name: "柳如是",
            email: "xx@qq.com"
        }
    },
    _a["董小宛"] = {
        name: "董小宛",
        email: "ss@qq.com"
    },
    _a);
var personDict1 = (_b = {
        柳如是: {
            name: "柳如是",
            email: "xx@qq.com"
        }
    },
    _b["董小宛"] = {
        name: "董小宛",
        email: "ss@qq.com"
    },
    _b);
var liu = personDict1["柳如是"];
personDict["yangbing"] = {
    nam: "yangbing",
    email: "yy@qq.com"
};
personDict1["yangbing"] = {
    // nam: 'yangbing',
    name: "yangbing",
    email: "yy@qq.com"
};
//NOTE: 访问一个悬空的成员不会报错！！！！！！！
var nobody = personDict1["nobody"];
nobody.name = "nobody"; //NOTE: 这里，typescript编译器未报错，nobody是undefined！！！
