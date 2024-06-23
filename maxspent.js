function getMoneySpent(keyboards, drives, b) {
  let maxSpent = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let totalCost = keyboards[i] + drives[j];
      if (totalCost <= b && totalCost > maxSpent) {
        maxSpent = totalCost;
      }
    }
  }

  return maxSpent;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // Output: 9
console.log(getMoneySpent([4], [5], 5)); // Output: -1
