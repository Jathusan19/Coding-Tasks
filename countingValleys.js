function countingValleys(n, s) {
  let altitude = 0;
  let valley_count = 0;
  let inValley = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      altitude++;
    } else if (s[i] === "D") {
      altitude--;
    }

    if (altitude < 0 && !inValley) {
      inValley = true;
    } else if (altitude == 0 && inValley) {
      valley_count++;
      inValley = false;
    }
  }

  return valley_count;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));
// Output: 2
console.log(countingValleys(8, "UDDDUDUU"));
// Output: 1
