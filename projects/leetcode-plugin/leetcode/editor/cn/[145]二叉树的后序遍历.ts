//给定一个二叉树，返回它的 后序 遍历。
//
// 示例:
//
// 输入: [1,null,2,3]
//   1
//    \
//     2
//    /
//   3
//
//输出: [3,2,1]
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// Related Topics 栈 树 深度优先搜索 二叉树
// 👍 649 👎 0

//leetcode submit region begin(Prohibit modification and deletion)

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const queue = [root];
  while (queue.length) {
    const cur = queue.pop();
    cur && cur.left && queue.push(cur.left); // 先加左
    cur && cur.right && queue.push(cur.right);
    cur && result.unshift(cur.val); // 要倒序添加
  }
  return result;
}

//leetcode submit region end(Prohibit modification and deletion)
