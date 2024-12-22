function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers'; // Handle non-numeric inputs
  }
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo(5, '5'));  // Output: Error: Inputs must be numbers
console.log(foo('5', 5));  // Output: Error: Inputs must be numbers