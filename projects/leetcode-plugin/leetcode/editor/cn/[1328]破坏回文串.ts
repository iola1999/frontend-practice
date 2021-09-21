//给你一个由小写英文字母组成的回文字符串 palindrome ，请你将其中 一个 字符用任意小写英文字母替换，使得结果字符串的 字典序最小 ，且 不是 回文
//串。
//
// 请你返回结果字符串。如果无法做到，则返回一个 空串 。
//
// 如果两个字符串长度相同，那么字符串 a 字典序比字符串 b 小可以这样定义：在 a 和 b 出现不同的第一个位置上，字符串 a 中的字符严格小于 b 中的
//对应字符。例如，"abcc” 字典序比 "abcd" 小，因为不同的第一个位置是在第四个字符，显然 'c' 比 'd' 小。
//
//
// 示例 1：
//
//
//输入：palindrome = "abccba"
//输出："aaccba"
//解释：存在多种方法可以使 "abccba" 不是回文，例如 "zbccba", "aaccba", 和 "abacba" 。
//在所有方法中，"aaccba" 的字典序最小。
//
// 示例 2：
//
//
//输入：palindrome = "a"
//输出：""
//解释：不存在替换一个字符使 "a" 变成非回文的方法，所以返回空字符串。
//
// 示例 3：
//
//
//输入：palindrome = "aa"
//输出："ab"
//
// 示例 4：
//
//
//输入：palindrome = "aba"
//输出："abb"
//
//
//
//
// 提示：
//
//
// 1 <= palindrome.length <= 1000
// palindrome 只包含小写英文字母。
//
// Related Topics 贪心 字符串 👍 29 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
function breakPalindrome(palindrome: string): string {
  if (palindrome.length === 1) return "";
  // 验证一半，如果有不是 a 的，改成 a
  for (let i = 0; i < Math.floor(palindrome.length / 2); i++) {
    if (palindrome[i] !== "a") {
      const arr = [...palindrome];
      arr[i] = "a";
      return arr.join("");
    }
  }
  // 如果全是 a，将最后一位改成 b
  const arr = [...palindrome];
  arr[arr.length - 1] = "b";
  return arr.join("");
}

//leetcode submit region end(Prohibit modification and deletion)
