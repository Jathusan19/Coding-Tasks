
function getNthPosition(a, b, n) {
  let arr = [];
  arr[0] = a;
  arr[1] = b;

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
    if (arr[i].length >= n) {
      console.log(arr[i][n - 1]);
      return arr[i][n - 1];
      break;
    }
  }

  console.log(arr);
  return "";
}

getNthPosition("1415", "8979", 10);
