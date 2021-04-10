/**
 * 
1. 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。
 */

function twoSum(nums: number[], target: number): number[] {
  let result: number[];
  const anotherNumMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const anotherIndex = anotherNumMap.get(target - nums[index]);
    if (anotherIndex !== undefined && index !== anotherIndex) {
      result = [index, anotherIndex];
      break;
    }
    anotherNumMap.set(nums[index], index);
  }
  return result;
}

// console.log(twoSum([1, 9, 2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
