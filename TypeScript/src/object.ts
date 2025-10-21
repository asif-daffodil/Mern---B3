type Product = { readonly name: string; price: number; isAvailable: boolean, category?: string }
const productInfo: Product = {
    name: "Laptop",
    price: 45000,
    isAvailable: true,
}

// productInfo.name = "Desktop"; -- Error: Cannot assign to 'name' because it is a read-only property.
productInfo.price = 50000;

// Index Signatures
const myIncome: { [key: string]: number } = {
    salary: 50000,
    bonus: 10000,
    freelance: 15000,
};

const totalIncome = Object.values(myIncome).reduce((acc, curr) => acc + curr, 0);

type person = { name: string, age: number };
const teacher: person = { name: "Asif Abir", age: 23 };
