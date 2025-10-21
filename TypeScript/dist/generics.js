"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ourFunction(p1, p2) {
    return [p1, p2];
}
const returnVal = ourFunction("Hi", 123);
console.log(returnVal);
function ourFunction2(p1) {
    return p1;
}
const returnVal2 = ourFunction2("Hi");
console.log(returnVal2);
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(2, 3));
class myClass {
    student;
    test;
    showString(p) {
        return p;
    }
}
const obj = new myClass;
obj.student = 123;
console.log(obj.student);
const returnData = obj.showString("This is a string");
console.log(returnData);
