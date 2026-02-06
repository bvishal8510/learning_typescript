// let msg;
// msg = 1;
// console.log(msg);
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
var arr = [1, 2, 3, 4, 5];
console.log(arr);
