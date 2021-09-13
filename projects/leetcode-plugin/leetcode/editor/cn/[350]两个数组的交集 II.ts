//给定两个数组，编写一个函数来计算它们的交集。
//
//
//
// 示例 1：
//
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
//输出：[2,2]
//
//
// 示例 2:
//
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//输出：[4,9]
//
//
//
// 说明：
//
//
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。
//
//
// 进阶：
//
//
// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
//
// Related Topics 数组 哈希表 双指针 二分查找 排序 👍 556 👎 0

// 为两个数组分别建立 map，用来存储 num -> count 的键值对，统计每个数字出现的数量。
// 然后对其中一个 map 进行遍历，查看这个数字在两个数组中分别出现的数量，取出现的最小的那个数量（比如数组 1 中出现了 1 次，数组 2 中出现了 2 次，那么交集应该取 1 次），push 到结果数组中即可。

//leetcode submit region begin(Prohibit modification and deletion)
function intersect(nums1: number[], nums2: number[]): number[] {
  const map1 = makeMap(nums1);
  const map2 = makeMap(nums2);
  const result: number[] = [];
  [...map1.entries()].forEach(([num, countIn1]) => {
    const minCount = Math.min(countIn1, map2.get(num));
    for (let i = 0; i < minCount; i++) {
      result.push(num);
    }
  });
  return result;
}

function makeMap(nums: number[]): Map<number, number> {
  const map: Map<number, number> = new Map();
  nums.forEach(item => {
    const count = map.get(item) || 0;
    map.set(item, count + 1);
  });
  return map;
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
