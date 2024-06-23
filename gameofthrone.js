function gameOfThrones(s) {
  const frequency = {};
  for (const char of s) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  console.log(frequency);
  let oddCount = 0;
  for (const count of Object.values(frequency)) {
    if (count % 2 !== 0) oddCount++;
  }

  if (oddCount > 1) return "NO";
  return "YES";
}

// Test cases
console.log(gameOfThrones("aaabbbb"));
// "YES"
console.log(gameOfThrones("aaaaabbb"));
// "NO"
