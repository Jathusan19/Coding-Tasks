function gemstones(arr) {
  const frequencyArray = arr.map((str) => {
    const frequency = {};
    for (const char of str) {
      if (frequency[char]) {
        frequency[char]++;
      } else {
        frequency[char] = 1;
      }
    }
    return frequency;
  });

  console.log(frequencyArray);

  const commonElements = frequencyArray.reduce((common, freq) => {
    return common.filter((element) => element in freq);
  }, Object.keys(frequencyArray[0]));

  console.log(commonElements);

  const minCounts = commonElements.map((element) => {
    return Math.min(...frequencyArray.map((freq) => freq[element]));
  });

  console.log(minCounts);

  const sum = minCounts.reduce((a, b) => a + b, 0);
  console.log(sum);

  return sum;
}

gemstones(["basdfj", "asdlkjfdjsa", "bnafvfnsd", "oafhdlasd"]);
