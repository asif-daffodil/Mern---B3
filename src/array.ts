const studentCities: string[] = ["Bogura", "Jaypurhat", "Dhaka"];
const studentAges: Array<number> = [23, 45, 67, 89];
const subjects: [string, number] = ["Math", 101];
const subjects2: [string, number][] = [["Math", 101], ["English", 102]];
const genderAge: (string | number)[] = ["Male", 23, "Female", 25];
const genderAge2: Array<string | number> = ["Male", 23, "Female", 25];

for (const city of studentCities) {
    console.log(city);
}

const totalAge = studentAges.reduce((acc, curr) => acc + curr, 0);
