let userId: string | number;
userId = 123;
userId = "123";

function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string behavior
  } else {
    console.log(value * 2);           // number behavior
  }
}

process("hello");
process(10);

type role = "admin" | "user" | "guest";
let userRole: role;
// userRole = "sadmin";