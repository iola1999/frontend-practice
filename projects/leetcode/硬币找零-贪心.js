/**
 * 硬币找零 之 贪心算法
 */
(function (coins, amount) {
  let greedy = function (amount) {
    let total = 0; //已找金额
    let change = []; //放硬币的罐子
    for (let i = coins.length - 1; i >= 0; i--) {
      let coin = coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }
    return change.length;
  };
  console.log(
    "从面值为 " + coins + " 的硬币中找零 " + amount + " 块钱，最少要 " + greedy(amount) + " 枚硬币"
  );
})([1, 2, 5, 10], 36);
/**
 * 硬币找零 之 贪心算法
 */
(function (coins, amount) {
  let greedy = function (amount) {
    let sumTmp = 0,
      useCoinCount = 0;
    for (let i = coins.length - 1; i >= 0; i--) {
      const curCoisUseCount = Math.floor((amount - sumTmp) / coins[i]);
      useCoinCount += curCoisUseCount;
      sumTmp += curCoisUseCount * coins[i];
    }
    if (sumTmp === amount) return useCoinCount;
    return -1;
  };
  console.log(
    "从面值为 " + coins + " 的硬币中找零 " + amount + " 块钱，最少要 " + greedy(amount) + " 枚硬币"
  );
})([1, 2, 5, 10], 36);
