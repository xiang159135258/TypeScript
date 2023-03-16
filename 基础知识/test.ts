// 声明变量name ，指定他的类型为String
let name2: string ;
// 如果变量的声明与复制时同时进行的，TS可以自动对变量进行类型检测
let num = 1231 ;
num = 'dad'; //不能将类型“string”分配给类型“number”

name2 = 'qweqw';

function sum (a:number, b:number) :number{
    return a+b;
}

let res = sum(123, '323', "213123");

// 声明变量如果不指定类型， 则TS解析器会自动判断变量的类型为 any （隐式的any）
// 类型为 any ，它可以赋值给任意变量
// unknown 未知类型的值 ; 实际上是一个类型安全的 any
let e : any;
let f : unknown;

e = num;
num = f;

//类型断言
f = name2 as string;
f = <string>name2

//字面量进类型声明
let a:10;
a= 11; 

// 联合类型
let c : 'male' | 'fem';
c = 'male'
c = 'fem'
let d : boolean | string;
d = true;
d =  'dadas';
d = 2313;
let n : {na :string} & {age :number}
n = {na:'123', age: 123}


function fn(): void {
    return undefined;
}

function fn1() :never{
    //用来解决报错
}

// {} 用来指定对象中可以包含哪些属性
// 再属性名后面加上？,表示属性时可选的
let g: {name: string, age?:number}
g = {name : 'sun', age:1, local:123}

// [ xx: string ] ：any 任意类型的属性
let h : {name: string, [propName: string]:any};
h = {name : 'sun', age:1, local:123}

// 设置函数结构的类型声明
let i: (a:number, b:string)=>string;
i = function(n1,n2){return b }

// string[] 表示字符串数组
let j :string[]
let k: Array<string>

// 元组：固定长度的数组
let l : [string, number];
l =  ['ss',12,233];

// 枚举
enum Sex{
    male = 0,
    Femalr = 1
}
let m: {name:string, sex: Sex};
m = {
    name:'s',
    sex: Sex.male
}
console.log(m.sex === Sex.Femalr)

// 类型别名
type meType  = 1 | 3 | 4
let o1 : meType
let o2 : meType
o1 = 1
o2 = 2