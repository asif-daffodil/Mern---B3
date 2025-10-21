"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentCities = ["Bogura", "Jaypurhat", "Dhaka"];
const studentAges = [23, 45, 67, 89];
const subjects = ["Math", 101];
const subjects2 = [["Math", 101], ["English", 102]];
const genderAge = ["Male", 23, "Female", 25];
const genderAge2 = ["Male", 23, "Female", 25];
for (const city of studentCities) {
    console.log(city);
}
const totalAge = studentAges.reduce((acc, curr) => acc + curr, 0);
