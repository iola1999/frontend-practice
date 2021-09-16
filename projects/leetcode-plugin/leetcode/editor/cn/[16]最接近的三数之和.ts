//给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和
//。假定每组输入只存在唯一答案。
//
//
//
// 示例：
//
// 输入：nums = [-1,2,1,-4], target = 1
//输出：2
//解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//
//
//
//
// 提示：
//
//
// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4
//
// Related Topics 数组 双指针 排序 👍 877 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2] - target;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sumDistance = nums[i] + nums[left] + nums[right] - target;
      if (sumDistance === 0) return target;
      if (sumDistance < 0) {
        left++;
      }
      if (sumDistance > 0) {
        right--;
      }
      if (Math.abs(result) > Math.abs(sumDistance)) {
        result = sumDistance;
      }
    }
  }
  return result + target;
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));
