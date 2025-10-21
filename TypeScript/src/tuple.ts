function myStudents(): [string, number] {
    return ["Hello Students", 4];
}

const myStds = myStudents();
console.log(myStds[0]);
console.log(myStds[1]);

const myInfo: [string, number?] = ["Asif Abir"];
myInfo.push(123);