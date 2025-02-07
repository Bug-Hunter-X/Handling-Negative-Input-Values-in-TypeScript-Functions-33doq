function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This works fine

// But this will throw an error if n is a negative number
function printNumbersImproved(n: number): void {
  if (n < 0) {
    throw new Error('n must be a non-negative number');
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbersImproved(10); // This works fine
printNumbersImproved(-5); // This throws an error