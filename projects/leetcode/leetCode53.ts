function maxSubArray(nums: number[]): number {
    let tmpBeforeSum: number = 0, result: number = nums[0];
    for (let i = 0; i < nums.length; i += 1) {
        if (tmpBeforeSum > 0) {
            tmpBeforeSum += nums[i];
        } else {
            // 如果前面的和已经小于零了，就对后面没用了
            tmpBeforeSum = nums[i]
        }
        result = Math.max(tmpBeforeSum, result)
    }
    return result
}

console.log(maxSubArray([2, 3, -1, 7]))
console.log(maxSubArray([-1]))
