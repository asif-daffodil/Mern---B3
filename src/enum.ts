enum direction {
    up = 10,
    down,
    left,
    right
}

const myDirection: direction = direction.left;
console.log(typeof myDirection); 
console.log(typeof direction); 
console.log(direction.down); 

// String Enum
enum direction2 {
    up = "UP",
    down = "DOWN",
    left = "LEFT",
    right = "RIGHT"
}

const myDirection2: direction2 = direction2.left;
console.log(typeof myDirection2);
console.log(myDirection2);

// Heterogeneous Enum
enum direction3 {
    up = 10,
    down = "DOWN",
    left = 20,
    right = "RIGHT"
}

// uses of Enum
function getDirection(d: direction2) {
    return `Players direction is: ${d}`;
}

console.log(getDirection(direction2.up));

enum DefaultStudentValues {
    name = "John",
    city = "New York",
}

type Student = {
    name: string;
    age: number;
    city: string;
    zipCode: number;
}

const studentData: Student = {
    name: DefaultStudentValues.name,
    age: 22,
    city: DefaultStudentValues.city,
    zipCode: 10001
}

console.log(studentData.name);