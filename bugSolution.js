function foo(a, b) {
  // Check if either a or b is falsy
  if (!a || !b) {
    return 0;
  }

  return a + b;
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3
console.log(foo(0, 1)); // Output: 0
console.log(foo(1, false)); // Output: 0
console.log(foo(undefined, 1)); //Output: 0