//一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
//
//
//
// 示例 1：
//
// 输入：nums = [4,1,4,6]
//输出：[1,6] 或 [6,1]
//
//
// 示例 2：
//
// 输入：nums = [1,2,10,4,1,4,3,3]
//输出：[2,10] 或 [10,2]
//
//
//
// 限制：
//
//
// 2 <= nums.length <= 10000
//
//
//
// Related Topics 位运算 数组
// 👍 454 👎 0

// 相同的数异或为0，不同的异或为1。0和任何数异或等于这个数本身。
//
// 所以，数组里面所有数异或 = 目标两个数异或 。 由于这两个数不同，所以异或结果必然不为0。
//
// 假设数组异或的二进制结果为10010，那么说明这两个数从右向左数第2位是不同的
//
// 那么可以根据数组里面所有数的第二位为0或者1将数组划分为2个。
//
// 这样做可以将目标数必然分散在不同的数组中，而且相同的数必然落在同一个数组中。
//
// 这两个数组里面的数各自进行异或，得到的结果就是答案

//leetcode submit region begin(Prohibit modification and deletion)
function singleNumbers(nums: number[]): number[] {
  const firstCheck = nums.reduce((previousValue, currentValue) => previousValue ^ currentValue);
  const lastDiffIndex = firstCheck.toString(2).length - firstCheck.toString(2).lastIndexOf("1");
  let result1 = 0,
    result2 = 0;
  nums.forEach(num => {
    const temp = num.toString(2);
    // console.log("test", temp, temp.charAt(temp.length - lastDiffIndex));
    if (temp.charAt(temp.length - lastDiffIndex) === "1") {
      result1 = result1 ^ num;
    } else {
      result2 = result2 ^ num;
    }
  });
  return [result1, result2];
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(singleNumbers([11, 45, 46, 23, 45, 46]));
console.log(singleNumbers([5, 1, 1, 2]));
