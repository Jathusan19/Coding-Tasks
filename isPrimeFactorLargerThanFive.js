function isPrimeFactorLargerThanFive(number) {
  if (number <= 0) {
    return false;
  }

  while (number % 2 === 0) {
    number /= 2;
  }

  while (number % 3 === 0) {
    number /= 3;
  }

  while (number % 5 === 0) {
    number /= 5;
  }

  return number === 1;
}

console.log(isPrimeFactorLargerThanFive(10)); // Should return true
console.log(isPrimeFactorLargerThanFive(13)); // Should return false
console.log(isPrimeFactorLargerThanFive(30)); // Should return true (2 * 3 * 5)
console.log(isPrimeFactorLargerThanFive(35)); // Should return false (5 * 7)
