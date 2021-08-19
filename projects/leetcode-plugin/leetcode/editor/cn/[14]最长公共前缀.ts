//编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
//
//
// 示例 1：
//
//
//输入：strs = ["flower","flow","flight"]
//输出："fl"
//
//
// 示例 2：
//
//
//输入：strs = ["dog","racecar","car"]
//输出：""
//解释：输入不存在公共前缀。
//
//
//
// 提示：
//
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成
//
// Related Topics 字符串
// 👍 1731 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
function longestCommonPrefix(strs: string[]): string {
  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every(item => item[i] === strs[0][i])) {
      result += strs[0][i];
    } else {
      break;
    }
  }
  return result;
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
