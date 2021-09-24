//给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
//
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//
//
//
// 示例 1:
//
//
//输入: [3,2,1,5,6,4] 和 k = 2
//输出: 5
//
//
// 示例 2:
//
//
//输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
//输出: 4
//
//
//
// 提示：
//
//
// 1 <= k <= nums.length <= 10⁴
// -10⁴ <= nums[i] <= 10⁴
//
// Related Topics 数组 分治 快速选择 排序 堆（优先队列） 👍 1294 👎 0

// 类似快速排序的思路，性能并不是很好。
//leetcode submit region begin(Prohibit modification and deletion)
function findKthLargest(nums: number[], k: number): number {
  // const pickOneValue = nums[0];
  const pickOneValue = nums[Math.floor(Math.random() * nums.length)]; // 听说随机取基准值有奇效
  const lower: number[] = [];
  const equal: number[] = [];
  const higher: number[] = [];
  nums.forEach(item => {
    if (item === pickOneValue) {
      equal.push(item);
    } else {
      item > pickOneValue ? higher.push(item) : lower.push(item);
    }
  });
  let newK: number, newArr: number[];
  if (higher.length >= k) {
    newK = k;
    newArr = higher;
  } else if (higher.length + equal.length >= k) {
    // 最终结果一定是在这里面
    return equal[0];
  } else {
    newK = k - higher.length - equal.length;
    newArr = lower;
  }
  return findKthLargest(newArr, newK);
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
