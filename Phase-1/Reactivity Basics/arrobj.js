const arr1 = [1, 2, 3];
const arr2 = arr1; // Both point to the same array
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] ✅ Changed
console.log(arr2); // [1, 2, 3, 4] ✅ Same reference

// copy instead:
const arr3 = [...arr1]; // Spread operator creates a new array
arr3.push(5);

console.log(arr1); // [1, 2, 3, 4] ✅ Original stays
console.log(arr3); // [1, 2, 3, 4, 5] ✅ New array
