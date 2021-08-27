function maxBagValue(weights: number[], values: number[], bagWight): number {
  const dp: number[][] = new Array(weights.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(bagWight + 1).fill(0);
  }
  console.table(dp);
  // 初始化 i=0
  for (let j = bagWight; j > 0; j--) {
    dp[0][j] = dp[0][j - 1] + values[0];
  }
  console.table(dp);
  for (let i = 1; i < weights.length; i++) {
    for (let j = 0; j < bagWight + 1; j++) {
      if (j < weights[i]) {
        // 放不下
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
  console.table(dp);
  return dp[weights.length - 1][bagWight];
}

console.log(maxBagValue([1, 3, 4], [15, 20, 30], 4));
