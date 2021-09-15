//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//
//
// 示例 2：
//
//
//输入：nums = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：nums = [0]
//输出：[]
//
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵
//
// Related Topics 数组 双指针 排序 👍 3745 👎 0

//leetcode submit region begin(Prohibit modification and deletion)

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);  // 不能直接 sort
  const result: Set<string> = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
        right = nums.length - 1;
    while (left < right) {
      if (nums[i] > 0) break;
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      }
      if (sum === 0) {
        // console.log(nums[i], nums[left], nums[right]);
        result.add([nums[i], nums[left], nums[right]].join(","));
        left++;
        right--;
      }
      if (sum > 0) {
        right--;
      }
    }
  }
  return [...result].map(item => item.split(",").map(itemNum => parseInt(itemNum)));
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
