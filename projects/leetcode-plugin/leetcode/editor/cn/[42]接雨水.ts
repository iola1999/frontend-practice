//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
//
//
// 示例 1：
//
//
//
//
//输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
//输出：6
//解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
//
//
// 示例 2：
//
//
//输入：height = [4,2,0,3,2,5]
//输出：9
//
//
//
//
// 提示：
//
//
// n == height.length
// 0 <= n <= 3 * 10⁴
// 0 <= height[i] <= 10⁵
//
// Related Topics 栈 数组 双指针 动态规划 单调栈 👍 2687 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
// function trapVersion1(height: number[]): number {
//   let result = 0;
//   for (let i = 1; i <= height.length - 2; i++) {
//     // 左右找最大值，取较小的一个，减去当前值
//     // console.log("左，当前，右：", height.slice(0, i), height[i], height.slice(i + 1));
//     const tmpValue =
//       Math.min(Math.max(...height.slice(0, i)), Math.max(...height.slice(i + 1))) - height[i];
//     if (tmpValue > 0) result += tmpValue;
//   }
//   return result;
// }

function trap(height: number[]): number {
  let result = 0;
  const n = height.length;
  // 优化 max 算法，存储 lMax[]、rMax[]
  const lMax = new Array(n); // 从左往右算
  const rMax = new Array(n); //从右往左算
  lMax[0] = height[0];
  rMax[n - 1] = height[n - 1];
  for (let i = 1; i < n; i++) {
    lMax[i] = Math.max(lMax[i - 1], height[i]);
  }
  for (let i = n - 2; i >= 0; i--) {
    rMax[i] = Math.max(rMax[i + 1], height[i]);
  }

  for (let i = 1; i <= n - 2; i++) {
    const tmpValue = Math.min(lMax[i], rMax[i]) - height[i];
    if (tmpValue > 0) result += tmpValue;
  }
  return result;
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
