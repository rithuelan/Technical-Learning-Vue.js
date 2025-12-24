// Using let
let count = 1;
count = 2; // ✅ Allowed

// Using const
const PI = 3.14;
PI = 3.1415; // ❌ Error: Assignment to constant variable

// But with objects and arrays:
const person = { name: "Rithiha", age: 25 };
person.age = 26; // ✅ Allowed, we mutated the object, not reassigned

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed
numbers = [5, 6]; // ❌ Not allowed
