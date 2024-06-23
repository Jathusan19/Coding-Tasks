function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (arr[i] + arr[j] === m) {
        console.log("output : " + [i + 1, j + 1]);
        return [i + 1, j + 1];
      }
    }
  }
  return false;
}

icecreamParlor(4, [6, 3, 5, 1, 2]);
