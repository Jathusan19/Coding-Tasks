function marsExploration(s) {
  let alteredCount = 0;
  const expectedSequence = "SOS";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== expectedSequence[i % 3]) {
      alteredCount++;
    }
  }

  return alteredCount;
}

console.log(marsExploration("SOSSOT")); // Output: 1
console.log(marsExploration("SSOSSPSSQSSOR")); // Output: 9
