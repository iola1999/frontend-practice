//给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
//
// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序
//列。
//
//
// 示例 1：
//
//
//输入：nums = [10,9,2,5,3,7,101,18]
//输出：4
//解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
//
//
// 示例 2：
//
//
//输入：nums = [0,1,0,3,2,3]
//输出：4
//
//
// 示例 3：
//
//
//输入：nums = [7,7,7,7,7,7,7]
//输出：1
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
//
//
//
//
// 进阶：
//
//
// 你可以设计时间复杂度为 O(n2) 的解决方案吗？
// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
//
// Related Topics 数组 二分查找 动态规划
// 👍 1774 👎 0

// function lengthOfLIS(nums: number[]): number {
//     const dp = new Array(nums.length).fill(1);
//     let result = 1;
//     // 代表到 nums[index] 为止此前最大的最大递增序列
//     for (let i = 0; i < nums.length; i++) {
//         // 遍历这个数之前的值，更新 dp
//         for (let j = 0; j < i; j++) {
//             if (nums[j] < nums[i]) {
//                 dp[i] = Math.max(dp[j] + 1, dp[i]);
//             }
//         }
//         result = Math.max(result, dp[i]);
//     }
//     return result;
// };

//leetcode submit region begin(Prohibit modification and deletion)
function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1);
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]); // [1,2(j),.......9(i),10]
      }
    }
    result = Math.max(result, dp[i]);
  }
  return result;
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
