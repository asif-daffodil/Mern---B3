const myName: string = "Asif Abir";
const isStudent: boolean = false;
const age: number = 123;

const name1: symbol = Symbol("Kuddus Boyati");
const name2: symbol = Symbol("Kuddus Boyati");

// console.log(name1 == name2);
// console.log(name1);

let val: unknown = 123;
val = "Hello World";

if (typeof val == "string") {
    console.log(val.length);
}