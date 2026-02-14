"use strict";
// let msg;
// msg = 1;
// console.log(msg);
Object.defineProperty(exports, "__esModule", { value: true });
// class demo {
//     private num1: number = 2;
//     public num3: number = 4;
//     demofunc(num2: number) :void {
//         console.log(num2+this.num1);
//     }
// }
// let obj = new demo();
// obj.demofunc(3);
// console.log(obj.num3);
// // console.log(obj.num1);   gives error as num1 is private
// let tuple_t1: [number,string] = [2,"Vishal"];
// tuple_t1[0] = 2 //works because matched the type
// // tuple_t1[1] = 1 //fails because type not matched
// let tuple_t2: readonly [number,string] = [2,"Vishal"];
// // tuple_t2[0] = 2 //fails as tuple is defined as readonly
// enum e1 {
//     "up", //0
//     "down", //1
//     "left", //2
//     "right" //3
// }
// console.log(e1.up) // gives 0
// enum e2 {
//     up = 200,
//     down = 400,
//     left, //401
//     right //402
// }
// enum e3 {
//     up = "up",
//     down = "down",
//     left = "left",
//     right = "right"
// }
// an interface is a powerful feature used to define the shape or contract that objects, functions, or classes must adhere to
// interface User {
//     Name : string,
//     readonly RollNo : number,
//     howmNo? : number, //optional property
//     getRollNo(): number
// }
// let user: User = {
//     Name: "Vishal",
//     RollNo:2,
//     getRollNo : ()=>user.RollNo //optional properties cannnot be returned from function user.howmNo will give error
// }
// function demo(person:User) {
//     // person.RollNo = 3 // will give error as readonly
//     console.log("User :",person.Name, person.RollNo);
// }
// let id : number | string | boolean; //union type lets you define multiple types for a variable
// id = 2;
// console.log(id);
// id = "Vishal";
// console.log(id);
// id = true;
// console.log(id);
// interface Name {
//   name: string;
// }
// interface Age {
//   age: number;
// }
// // Person must have both 'name' (from Name) and 'age' (from Age)
// type Person = Name & Age; // intersection type combines multiple types into one. A value of an intersection type must satisfy all the constituent types.
// const person: Person = {
//   name: 'John Doe',
//   age: 30,
// };
// type direction = 'up' | 'down' | 'left' | 'right'; // Literal type - Enables exact value types, allowing variables to be assigned specific values only.
// let direct : direction;
// direct = 'up'; //valid
// // direct = 'forward'; //invalid as not part of type direction
// Mapped types
// interface User {
//     name: string,
//     rollNo: number,
//     age: number
// }
// // type NewType<T> = {[P in keyof T]: TransformedType};
// type optionalUser = {[P in keyof User]?: User[P]} // mapped type that makes all properties of User optional
// type requireduser = {[P in keyof User]-?: User[P]}
// type readonlyUser<T> = {readonly [P in keyof T]-?: T[P]};
// // Built-in Utility Types
// // TypeScript provides several common mapped types out-of-the-box, known as Utility Types: 
// // Partial<T>: Makes all properties in T optional.
// // Readonly<T>: Makes all properties in T readonly.
// // Pick<T, K>: Constructs a type by picking the set of properties K from T.
// // Omit<T, K>: Constructs a type by omitting the set of properties K from T.
// // Record<K, T>: Constructs an object type whose property keys are K (a union of keys) and whose property values are T. 
// // Example - function demo(name:string, user:Partial<User>) : void {}
// Type annotations in TypeScript are used to explicitly specify the type of a variable, function parameter, or object property
// let arr : number[] = [1,2,3,4,5]; // explicitly annotated as number[]
// console.log(arr)
// TypeScript's type inference automatically determines the types of variables, function return values, objects, and arrays based on their assigned values and usage.
// let arr = [1,2,3,4,5]; // inferred as number[]
// type callBackType = (callBackFunctionName: type) => returnType;
// eg: - function performOperation(a: number, b: number, callback: (result: number) => void): void {}
// type twonum = {
//     (a:number, b:number):number;
//     operation : string;
// };
// const addition: twonum = (a:number,b:number) => a+b; // will not work with let because of re-assignment problem
// addition.operation="addition";
// console.log(addition.operation, "  -->  ",addition(3,7))
// interface User { // majorly used for object structures // interface are open means they can be defined twice and will merge the properties of both instead of giving error. Useful for extending any other lib
//     name:string,
//     surname:string
// }
// type User1 = { // for anything else (union, aliases, primitives)
//     name:string,
//     surname:string
// }
// let user:User = {
//     name:"Vishal",
//     surname:"Baghel"
// }
// let user1:User1 = {
//     name:"Namrata",
//     surname:"Pal"
// }
// console.log("cjhd",user);
// console.log("cjhd1",user1);
// // error you cannot add properties to interface or type
// // user.addtition = "ckjds"; 
// // user1.addtion = "cjhd"
// // Interface and type with classes both uses implements to be used with class
// interface User {
//     name:string,
//     surname:string,
//     printName():void
// }
// type User = {
//     name:string,
//     surname:string,
//     printName():void
// }
// class DemoUser implements User { // properties and functions in interface should be present in class if class implements interface
//     // removing anyone of the properties gives error
//     name:string;
//     surname: string;
//     // properties and functions can be extended
//     anothername:string;
//     constructor(name:string,surname:string, anothername:string) {
//         this.name=name;
//         this.surname=surname;
//         this.anothername=anothername;
//     }
//     printName(): void {
//         console.log(this.name+this.surname+this.anothername)
//     }
//     getName():string {
//         return this.name+this.surname+this.anothername;
//     }
// }
// let obj = new DemoUser("Vishal","Baghel","Namrata");
// console.log(obj.getName());
// Access Modifiers (public, private, and protected)
// public: Properties and methods are accessible from outside the class.
// private: Restricts access to within the class itself.
// protected: Allows access within the class and its subclasses.
// readonly: only can be updated 
// class User {
//     public name:string;
//     private age:number;
//     protected standard:number;
//     readonly marks:number;
//     constructor(name:string, age:number, standard:number) {
//         this.name=name;
//         this.age=age;
//         this.standard=standard;
//         this.marks = 10;
//         this.marks = 20;
//     }
//     getAge() {
//         return this.age;
//     }
//     updateMarks() {
//         // this.marks = 60; // gives error as it is readonly
//     }
// }
// let userObj = new User("Vishal",29,7);
// console.log(userObj.name)
// // console.log(userObj.age) // gives error as age is private and can only be accessed through a public method of the class
// // console.log(userObj.standard); //gives error as standard is protected and can only be accessed within the class and its subclasses
// // userObj.marks = 40; //gives error as it is readonly
// console.log(userObj.marks);
// class Student extends User {
//     constructor(name:string,age:number,standard:number) {
//         super(name,age,standard);
//     }
//     printStudentInfo() {
//         console.log(this.name)
//         // console.log(this.age) // gives error as age is private and can only be accessed through a public method of the class
//         console.log(this.getAge()) // private is accessed through public method of class
//         console.log(this.standard) //works fine as protected are accessible within class and subclass
//     }
// }
// let stu = new Student("namrata",26,8);
// stu.printStudentInfo()
// let numbers: readonly number[] = [1, 2, 3, 4, 5];
// console.log(numbers);
// // numbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
// numbers = [1,2,3,4] // can be re-assigned on readonly
// console.log(numbers);
// // let readonly a: number = 1 //gives error and only works in class/interface/type apart from array and tuple
// class Demo {
//     fullName: string;
//     get name() {  // getter to get value of fullName
//         return this.fullName;
//     }
//     set name(name:string) { // setter to set value of fullName
//         this.fullName=name;
//     }
// }
// let demo = new Demo();
// demo.name="Vishal Baghel";
// console.log(demo.name);
// // Abstract classes are blueprint of other classes that are extended and cannot be instantiated directly. They can contain both abstract methods (without implementation) and concrete methods (with implementation). Subclasses must implement the abstract methods defined in the abstract class.
// abstract class Animal {
//     sound(): void {};
//     move(): void {
//         console.log("Animal is moving");
//     };
// }
// class Dog extends Animal {
//     sound(): string {
//         return "Woof!";
//     }
//     run():void {
//         console.log("Dog is running");
//     }
// }
// let dog = new Dog();
// console.log(dog.sound());
// dog.move();
// dog.run();
// // let animal = new Animal(); // gives error as abstract class cannot be instantiated directly
// In TypeScript, interfaces define the structure that classes must adhere to, ensuring consistent object shapes and facilitating type-checking.
// 1. Interfaces declare properties and methods without implementations, serving as contracts for classes to implement.
// 2. Classes use the implements keyword to adhere to an interface, providing concrete implementations for the declared members.\
// // Generics in ts - Generics in TypeScript allow developers to create reusable components that can work with multiple data types while maintaining type safety
// function displayData <type_parameter> (parameter: type_parameter) : type_parameter {
//     // return "abc"; type string is not assignable to type type_parameter as return type of function is type_parameter
//     return parameter;
// }
// console.log(displayData <string> ("hello"));
// console.log(displayData <number> (1));
// function displayDataArray <type_parameter> (parameter: type_parameter[]) : type_parameter[] {
//     // parameter.push(34); // will not work as number is not assignable to type type_parameter as parameter is of type type_parameter[]
//     return parameter;
// }
// let list = displayDataArray <string> (["Vishal","Namrata"]);
// // let list1 = displayDataArray <number> (["Vishal","Namrata"]); // will not work as string is not assignable to type number as parameter is of type type_parameter[] and type_parameter is number in this case
// console.log(list);
// list.push("Varsha");
// console.log(list);
// console.log(displayDataArray <number> ([1,2,3]));
// // Generic classes
// class GenericClass<T,V> {
//     private a:T;
//     private x:V;
//     constructor(b:T, c:V) {
//         this.a=b;
//         this.x=c;
//     }
//     getA():T {
//         return this.a;
//     }
//     getX() : V {
//         return this.x;
//     }
// }
// let c = new GenericClass<number,string>(6,"Vishal");
// console.log(c.getA());
// console.log(c.getX());
// let c1 = new GenericClass<string, number>("Hello", 67);
// console.log(c1.getA());
// console.log(c1.getX());
// // Static members in TypeScript are properties or methods that belong to the class itself rather than to any instance of the class. They can be accessed directly using the class name without creating an instance of the class. Static members are shared among all instances of the class, meaning that they have the same value for every instance. They are often used for utility functions, constants, or to keep track of information that is common to all instances of a class.
// class Demo {
//     static c:number=0;
//     constructor() {
//         Demo.c++; // only c will not work as c is static and belongs to class not instance
//     }
//     getCount():number {
//         return Demo.c;
//     }
//     static getCountstatic():number {
//         return Demo.c;
//     }
// }
// let obj1 = new Demo();
// let obj2 = new Demo();
// console.log(obj2.getCount()); // 2
// console.log(Demo.getCountstatic())
// Types of generic classes in TypeScript
//-  class GenericClass<T> {} - single type parameter
// - class GenericClass<T, U> {} - multiple type parameters
// - class GenericClass<T extends SomeType> {} - bound = constrained by SomeType for say number
// - class GenericClass<T = DefaultType> {} - default type parameter for say string
// // Type Assertions allow you to explicitly define a type when TypeScript cannot infer it automatically. They do not change the actual data but instruct TypeScript to treat a value as a specific type.
// let someValue: any = "This is a string";
// let strLength: number = (someValue as string).length;
// let strLength1: number = (<string>someValue).length;
// console.log(strLength,strLength1);
// // Template literal types in TypeScript allow the construction of new string literal types by combining existing string literal types using template literal syntax.
// type size = "small" | "medium" | "large";
// type sizeLiteral = `The size of item is ${size}`;
// let smallSizeItem:sizeLiteral = "The size of item is small";
// // let extraSizeItem:sizeLiteral = "The size of item is extra-large"; // gives error as extra-large is not assignalbe to small|medium|large
// console.log(smallSizeItem);
// // Recursive Types and Interfaces
// interface listNode {
//     data: number | string,
//     next : listNode | null
// }
// type listNodeType = {
//     data : number | string,
//     next : listNodeType[] | null
// }
// let node1: listNode = { data: 1, next: null };
// let node2: listNode = { data: 2, next: node1 };
// console.log(node2);
// let nodet1: listNodeType = { data:3, next:null};
// let nodet2: listNodeType = {data:4, next:[nodet1]};
// nodet2.next?.push(nodet1);
// console.log(nodet2)
// type RecursiveFunction = () => RecursiveFunction | null;
// let recursive:RecursiveFunction = () => {
//     return recursive();
// }
// import { add, multiply } from './math';
// console.log(add(5,8))
// console.log(multiply(5,8))
var math_1 = require("./math");
console.log(math_1.myspace.add(4, 5));
