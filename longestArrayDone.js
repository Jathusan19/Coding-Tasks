function pickingNumbers(a) {
  const max = Math.max(...a);

  let freq = {};

  for (let index = 1; index <= max; index++) {
    freq[index] = a.filter((num) => num === index).length;
  }

  let maxCount = 0;

  for (let index = 1; index < max; index++) {
    if (
      freq[index] > 0 &&
      freq[index + 1] > 0 &&
      maxCount < freq[index] + freq[index + 1]
    ) {
      maxCount = freq[index] + freq[index + 1];
    }
    // if (freq[index] > 0 && freq[index + 1] > 0) {
    //   maxCount = Math.max(maxCount, freq[index] + freq[index + 1]);
    // }
  }
  console.log(freq);
  console.log(maxCount);

  return maxCount;
}

pickingNumbers([1, 2, 2, 3, 1, 2]);
