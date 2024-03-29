//给定一个二叉树，找出其最大深度。
//
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例：
//给定二叉树 [3,9,20,null,null,15,7]，
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
// 返回它的最大深度 3 。
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树
// 👍 942 👎 0

//leetcode submit region begin(Prohibit modification and deletion)

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
}

//leetcode submit region end(Prohibit modification and deletion)
