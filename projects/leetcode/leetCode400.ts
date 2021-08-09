/*
* 400. 第 N 位数字
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 位数字。

注意：n 是正数且在 32 位整数范围内（n < 2^31）。

示例 1：
输入：3
输出：3
*
示例 2：
输入：11
输出：0
解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。
*  */

function findNthDigit(n: number): number {
    const table = []
    for (let i = 0; i < 11; i++) {
        table.push(9 * 10 ** i * (i + 1))
    }
    // console.log(table)
    let test: number = n, whichStart: number = 1, index: number = 0
    for (let i = 0; test > 0; i++) {
        test -= table[i]
        whichStart = 10 ** i
        index = i
    }
    // console.log('index', index)
    // console.log('whichStart', whichStart)
    test += table[index]
    // console.log('test', test)
    let numIndex1: number
    let numIndex2: number
    if (test % (index + 1) === 0) {
        numIndex1 = test / (index + 1)
        numIndex2 = index + 1
    } else {
        numIndex1 = Math.floor(test / (index + 1)) + 1    // 这一段，每个数字 位数是 index+1
        numIndex2 = test % (index + 1)
    }
    // console.log('第 数字的第 位', numIndex1 , numIndex2)
    const whichNumber: number = whichStart + numIndex1 - 1
    // console.log('whichNumber', whichNumber)
    return parseInt(String(whichNumber).substring(numIndex2 - 1, numIndex2))
}

// console.log(findNthDigit(3)) // 3
// console.log(findNthDigit(17)) // 3  // 13 的 3
// console.log(findNthDigit(130)) // 7
// console.log(findNthDigit(10000_00000)) // 1
console.log(findNthDigit(100)) // 5
