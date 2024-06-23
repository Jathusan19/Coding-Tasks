function pangrams(s) {
  const frequency = {};
  s = s.replace(/\s/g, "");
  s = s.toLowerCase();

  for (const char of s) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  console.log(s);
  console.log(frequency);
  if (Object.keys(frequency).length === 26) {
    console.log("pangram");
    return "pangram";
  }
  console.log("not pangram");
  return "not pangram";
}

pangrams("We promptly judged antique ivory buckles for the next prize");
