"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    lastName;
    birthYear;
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student extends Person {
    studentId;
    constructor(firstName, lastName, birthYear, studentId) {
        super(firstName, lastName, birthYear);
        this.studentId = studentId;
    }
    getAge(currentYear) {
        return currentYear - this.birthYear;
    }
    getDetails(currentYear) {
        return `Name: ${this.getFullName()}, Age: ${this.getAge(currentYear)}, ID: ${this.studentId}`;
    }
}
// ব্যবহার:
const s = new Student("জয়", "কুমার", 2000, "ST1234");
console.log(s.getDetails(2025));
// আউটপুট হবে: “Name: জয় কুমার, Age: 25, ID: ST1234”
