"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direction;
(function (direction) {
    direction[direction["up"] = 10] = "up";
    direction[direction["down"] = 11] = "down";
    direction[direction["left"] = 12] = "left";
    direction[direction["right"] = 13] = "right";
})(direction || (direction = {}));
const myDirection = direction.left;
console.log(typeof myDirection);
console.log(typeof direction);
console.log(direction.down);
// String Enum
var direction2;
(function (direction2) {
    direction2["up"] = "UP";
    direction2["down"] = "DOWN";
    direction2["left"] = "LEFT";
    direction2["right"] = "RIGHT";
})(direction2 || (direction2 = {}));
const myDirection2 = direction2.left;
console.log(typeof myDirection2);
console.log(myDirection2);
// Heterogeneous Enum
var direction3;
(function (direction3) {
    direction3[direction3["up"] = 10] = "up";
    direction3["down"] = "DOWN";
    direction3[direction3["left"] = 20] = "left";
    direction3["right"] = "RIGHT";
})(direction3 || (direction3 = {}));
// uses of Enum
function getDirection(d) {
    return `Players direction is: ${d}`;
}
console.log(getDirection(direction2.up));
var DefaultStudentValues;
(function (DefaultStudentValues) {
    DefaultStudentValues["name"] = "John";
    DefaultStudentValues["city"] = "New York";
})(DefaultStudentValues || (DefaultStudentValues = {}));
const studentData = {
    name: DefaultStudentValues.name,
    age: 22,
    city: DefaultStudentValues.city,
    zipCode: 10001
};
console.log(studentData.name);
