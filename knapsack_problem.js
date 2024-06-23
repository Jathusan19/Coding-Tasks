function getTotalPrice(items, curWeight, curSize, curIndex) {
  let dp = Array.from({ length: curWeight + 1 }, () =>
    Array(curSize + 1).fill(0)
  );

  for (let i = 0; i < curIndex; i++) {
    let { weight, price, size } = items[i];
    for (let w = curWeight; w >= weight; w--) {
      for (let s = curSize; s >= size; s--) {
        dp[w][s] = Math.max(dp[w][s], dp[w - weight][s - size] + price);
      }
    }
  }

  console.log("Total price: " + dp[curWeight][curSize]);

  return dp[curWeight][curSize];
}

const itemList = [
  { weight: 10, price: 20, size: 30 },
  { weight: 15, price: 25, size: 35 },
  { weight: 20, price: 30, size: 40 },
  { weight: 25, price: 35, size: 40 },
];

getTotalPrice(itemList, 50, 50, itemList.length);
