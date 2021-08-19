//给你一个字符串 s，找到 s 中最长的回文子串。
//
//
//
// 示例 1：
//
//
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
//
//
// 示例 2：
//
//
//输入：s = "cbbd"
//输出："bb"
//
//
// 示例 3：
//
//
//输入：s = "a"
//输出："a"
//
//
// 示例 4：
//
//
//输入：s = "ac"
//输出："a"
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成
//
// Related Topics 字符串 动态规划
// 👍 3974 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
function longestPalindrome(_s: string): string {
  const s = _s.replace(/(.)/g, "$1 ");  // 填充个空格，处理 cbbd 的问题
  let result = s[0];
  let tmp = "";
  for (let i = 0; i < s.length; i++) {
    tmp = s[i];
    // 往两边扩散
    for (let j = 1; j <= i + 1; j++) {
      if (s[i - j] === s[i + j]) {
        tmp = s[i - j] + tmp + s[i + j];
        if (tmp.length > result.length) result = tmp;
      } else {
        break;
      }
    }
  }
  return result.replace(/ /g, "");
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(longestPalindrome("aacabdkacaa"));
console.log(longestPalindrome("cbbd"));
