interface User {
    readonly name: string;
    age: number;
    isMarried: boolean;
}

interface studentInfo extends User {
    roll: number;
    city?: string;
}

const user1: studentInfo = {
    name: "Asif Abir",
    age: 24,
    isMarried: false,
    roll: 101
};

console.log(user1.name);

interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (a, b) => a + b;
