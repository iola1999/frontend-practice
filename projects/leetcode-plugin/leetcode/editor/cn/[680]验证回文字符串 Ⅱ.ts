//给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
//
//
//
// 示例 1:
//
//
//输入: s = "aba"
//输出: true
//
//
// 示例 2:
//
//
//输入: s = "abca"
//输出: true
//解释: 你可以删除c字符。
//
//
// 示例 3:
//
//
//输入: s = "abc"
//输出: false
//
//
//
// 提示:
//
//
// 1 <= s.length <= 10⁵
// s 由小写英文字母组成
//
// Related Topics 贪心 双指针 字符串 👍 394 👎 0

// 从左右两端开始验证是否是回文串，验证的过程中，若两个字符不等，再左右各加一或减一，验证一遍
//leetcode submit region begin(Prohibit modification and deletion)
function validPalindrome(s: string): boolean {
  function checkP(str: string, lPtr: number, rPtr: number, leftChance: number): boolean {
    if (leftChance < 0) return false;
    let l = lPtr,
      r = rPtr;
    while (l <= r) {
      if (str[l] === str[r]) {
        l++;
        r--;
      } else {
        // 删左边的 或 删右边的
        return checkP(str, l + 1, r, leftChance - 1) || checkP(str, l, r - 1, leftChance - 1);
      }
    }
    return true;
  }

  return checkP(s, 0, s.length - 1, 1);
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(validPalindrome("abcdba"));
