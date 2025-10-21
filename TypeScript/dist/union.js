"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userId;
userId = 123;
userId = "123";
function process(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // string behavior
    }
    else {
        console.log(value * 2); // number behavior
    }
}
process("hello");
process(10);
let userRole;
// userRole = "sadmin";
