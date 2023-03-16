// 声明变量name ，指定他的类型为String
var name2;
// 如果变量的声明与复制时同时进行的，TS可以自动对变量进行类型检测
var num = 1231;
num = 'dad'; //不能将类型“string”分配给类型“number”
name2 = 'qweqw';
function sum(a, b) {
    return a + b;
}
var res = sum(123, '323', "213123");
// 声明变量如果不指定类型， 则TS解析器会自动判断变量的类型为 any （隐式的any）
// 类型为 any ，它可以赋值给任意变量
// unknown 未知类型的值 ; 实际上是一个类型安全的 any
var e;
var f;
e = num;
num = f;
//类型断言
f = name2;
f = name2;
//字面量进类型声明
var a;
a = 11;
// 联合类型
var c;
c = 'male';
c = 'fem';
var d;
d = true;
d = 'dadas';
d = 2313;
function fn() {
    return undefined;
}
function fn1() {
    //用来解决报错
}
