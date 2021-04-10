/**
 * 
88. 合并两个有序数组
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let nums1Ptr = m - 1;
  let nums2Ptr = n - 1;
  let arrangedCount = 0;
  while (arrangedCount < m + n) {
    // console.log(nums1[nums1Ptr], nums2[nums2Ptr], nums1Ptr, nums2Ptr);
    if (nums2Ptr === -1) {
      // 说明是nums2已经用完了，说明nums1现在已经是有序的了
      // console.log("nums2Ptr===-1", nums1);
      break;
    }
    // 需要放到的位置是 nums1[nums1.length-1-arrangedCount]
    if (nums1[nums1Ptr] > nums2[nums2Ptr]) {
      // 交换 nums1 里的数据
      [nums1[nums1Ptr], nums1[nums1.length - 1 - arrangedCount]] = [
        nums1[nums1.length - 1 - arrangedCount],
        nums1[nums1Ptr],
      ];
      nums1Ptr -= 1;
    } else {
      nums1[nums1.length - 1 - arrangedCount] = nums2[nums2Ptr];
      nums2Ptr -= 1;
    }
    arrangedCount += 1;
  }
}

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,2,3,5,6]

// // nums1 = [0], m = 0, nums2 = [1], n = 1
// const nums1 = [0],
//   m = 0,
//   nums2 = [1],
//   n = 1;
// merge(nums1, m, nums2, n);
// console.log(nums1); // [1]

// // nums1 = [2,0], m = 1, nums2 = [1], n = 1
// const nums1 = [2, 0],
//   m = 1,
//   nums2 = [1],
//   n = 1;
// merge(nums1, m, nums2, n);
// console.log(nums1); // [1,2]
