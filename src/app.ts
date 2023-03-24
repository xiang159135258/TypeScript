// (function(){

//     // 抽象类
// abstract class Animal{
//     name : string;
//     age : number;

//     // 构造函数
//     constructor(name : string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     // 子类必须实现该方法
//     abstract sayHello():void;
// }

// class Person extends Animal{
//     static sex : string;
//     time: string;

//     constructor(time:string, name:string, age:number){
//         super(name, age); //调用父类函数，必须调用
//         this.time = time
//     }
//     sayHello(){
//         console.log("Per")
//     }
// }
// class dog extends Animal{
//     sayHello(){
//         console.log("dog")
//     }
// }

// // 接口中所有方法和属性都不能有实际值,类必须实现所有属性和方法
// interface myInterface{
//     name: string;
//     sayhello():void;
// }
// class MyInter implements myInterface{
//     sayhello(): void {
//         throw new Error("Method not implemented.");
//     }
//     name: string;
// }

// // const person = new Person('chuan', '12', 12);
// // console.log("hello Person")
// // console.log(person.name)
// // console.log(Person.sex)
// })();