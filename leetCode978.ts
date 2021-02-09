/*
* 当 A 的子数组 A[i], A[i+1], ..., A[j] 满足下列条件时，我们称其为湍流子数组：

若 i <= k < j，当 k 为奇数时， A[k] > A[k+1]，且当 k 为偶数时，A[k] < A[k+1]；
或 若 i <= k < j，当 k 为偶数时，A[k] > A[k+1] ，且当 k 为奇数时， A[k] < A[k+1]。
也就是说，如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组。

返回 A 的最大湍流子数组的长度。

示例 1：
输入：[9,4,2,10,7,8,8,1,9]
输出：5
解释：(A[1] > A[2] < A[3] > A[4] < A[5])

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-turbulent-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
function maxTurbulenceSize(arr: number[]): number {
    if (arr.length === 1) {
        return 1
    }
    if (arr.length === 2) {
        return arr[0] === arr[1] ? 1 : 2    // [3,3]
    }
    let maxCount: number = arr[0] === arr[1] ? 1 : 2    // [3,3,3]
    let leftIdx = 0, rightIdx = 2
    while (rightIdx < arr.length) {
        const lastDelta = arr[rightIdx - 1] - arr[rightIdx - 2]
        const currentDelta = arr[rightIdx] - arr[rightIdx - 1]
        // if (lastDelta * currentDelta < 0) {
        if (lastDelta && currentDelta && (lastDelta ^ currentDelta) < 0) {  // 位运算居然能节省0.8M内存。注意避开为0的
            // 异号。
            maxCount = Math.max(maxCount, rightIdx - leftIdx + 1)
        } else {
            leftIdx = rightIdx - 1
        }
        rightIdx += 1
    }
    return maxCount
}


console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]))    // 5 4>2<10>7<8
console.log(maxTurbulenceSize([4, 8, 12, 16]))    // 2
console.log(maxTurbulenceSize([3, 3]))    // 1
console.log(maxTurbulenceSize([3, 3, 3]))    // 1
console.log(maxTurbulenceSize([0, 1, 1, 0, 1, 0, 1, 1, 0, 0]))    // 5
