//给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。
//
//
//
// 示例 1：
//
//
//输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
//输出：32
//
//
// 示例 2：
//
//
//输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
//输出：23
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [1, 2 * 10⁴] 内
// 1 <= Node.val <= 10⁵
// 1 <= low <= high <= 10⁵
// 所有 Node.val 互不相同
//
// Related Topics 树 深度优先搜索 二叉搜索树 二叉树 👍 244 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let result = 0;
  const queue = [root];
  while (queue.length) {
    const cur = queue.shift();
    if (cur.left && cur.val >= low) {
      queue.push(cur.left);
    }
    if (cur.right && cur.val <= high) {
      queue.push(cur.right);
    }
    if (cur.val >= low && cur.val <= high) result += cur.val;
  }
  return result;
}

//leetcode submit region end(Prohibit modification and deletion)
