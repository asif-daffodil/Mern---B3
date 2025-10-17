type studentType = {
    name: string,
    age: number,
    isMarried: boolean
}

const student1: studentType = {
    name: "Sabur",
    age: 23,
    isMarried: false
}

console.log(student1.name);

type studentId = number;
const studentId1: studentId = 123;
console.log(studentId1);

// Function Type Alias
type sumFunc = (num1: number, num2: number) => number;

const add: sumFunc = (a, b) => a + b;

console.log(add(1, 2));