function equalizeArray(arr) {
  const countMap = arr.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  const maxCount = Math.max(...Object.values(countMap));

  console.log(arr.length - maxCount);

  return arr.length - maxCount;
}

equalizeArray([3, 3, 2, 1, 3]);
