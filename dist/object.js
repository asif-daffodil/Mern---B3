"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productInfo = {
    name: "Laptop",
    price: 45000,
    isAvailable: true,
};
// productInfo.name = "Desktop"; -- Error: Cannot assign to 'name' because it is a read-only property.
productInfo.price = 50000;
// Index Signatures
const myIncome = {
    salary: 50000,
    bonus: 10000,
    freelance: 15000,
};
const totalIncome = Object.values(myIncome).reduce((acc, curr) => acc + curr, 0);
const teacher = { name: "Asif Abir", age: 23 };
