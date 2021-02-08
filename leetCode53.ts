function maxSubArray(nums: number[]): number {
    let tmpBeforSum: number = 0, result: number = nums[0];
    for (let i = 0; i < nums.length; i += 1) {
        if (tmpBeforSum > 0) {
            tmpBeforSum += nums[i];
        } else {
            // 如果前面的和已经小于零了，就对后面没用了
            tmpBeforSum = nums[i]
        }
        result = Math.max(tmpBeforSum, result)
    }
    return result
}

console.log(maxSubArray([2, 3, -1, 7]))
