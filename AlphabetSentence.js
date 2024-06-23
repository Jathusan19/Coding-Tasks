function makeAlphabetSentenceSort(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").sort().join("");
  }

  words.sort((a, b) => a.length - b.length);

  console.log(words);

  return words.join(" ");
}

makeAlphabetSentenceSort("she lives with him in a small apartment");
