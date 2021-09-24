//给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
//
// 回文字符串 是正着读和倒过来读一样的字符串。
//
// 子字符串 是字符串中的由连续字符组成的一个序列。
//
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
//
//
//
// 示例 1：
//
//
//输入：s = "abc"
//输出：3
//解释：三个回文子串: "a", "b", "c"
//
//
// 示例 2：
//
//
//输入：s = "aaa"
//输出：6
//解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
//
//
//
// 提示：
//
//
// 1 <= s.length <= 1000
// s 由小写英文字母组成
//
// Related Topics 字符串 动态规划 👍 681 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
function countSubstrings(s: string): number {
  // TODO 这个解法是暴力了。。。应该从中心点扩散，检查是不是回文字符串。注意区分中心点为一个字符/两个字符的情况
  let result = 0,
    left = 0,
    right = 0;
  const judgeMap = new Map();

  function judge(str: String): Boolean {
    if (str.length === 1) return true;
    // const tryGetFromCache = judgeMap.get(str);
    // if (tryGetFromCache !== undefined) return tryGetFromCache;
    let start = 0,
      end = str.length - 1,
      isPali = true;
    while (start < end) {
      if (str[start] !== str[end]) {
        isPali = false;
        break;
      }
      start++;
      end--;
    }
    // judgeMap.set(str, isPali);
    return isPali;
  }

  while (left <= s.length - 1) {
    for (; right <= s.length - 1; right++) {
      const subStr = s.slice(left, right + 1);
      if (judge(subStr)) result += 1;
    }
    left += 1;
    right = left;
  }

  return result;
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(countSubstrings("aaasbbbsccdbbddbbdbbd"));
