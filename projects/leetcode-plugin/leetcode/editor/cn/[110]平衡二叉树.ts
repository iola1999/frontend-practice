//给定一个二叉树，判断它是否是高度平衡的二叉树。
//
// 本题中，一棵高度平衡二叉树定义为：
//
//
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
//
//
//
//
// 示例 1：
//
//
//输入：root = [3,9,20,null,null,15,7]
//输出：true
//
//
// 示例 2：
//
//
//输入：root = [1,2,2,3,3,null,null,4,4]
//输出：false
//
//
// 示例 3：
//
//
//输入：root = []
//输出：true
//
//
//
//
// 提示：
//
//
// 树中的节点数在范围 [0, 5000] 内
// -10⁴ <= Node.val <= 10⁴
//
// Related Topics 树 深度优先搜索 二叉树 👍 768 👎 0

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

function isBalanced(root: TreeNode | null): boolean {
  function getHeight(node: TreeNode | null) {
    if (!node) return 0;
    const lHeight = getHeight(node.left);
    const rHeight = getHeight(node.right);
    return lHeight > rHeight ? lHeight + 1 : rHeight + 1;
  }

  if (!root) return true;
  return (
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  ); // 要满足一个树是平衡二叉树，它的子树也必须是平衡二叉树。
}

/**
 * 时间复杂度分析#
 该方法最坏的情况是每个父节点都只有一个子节点，这样树的高度时间复杂度为 O(n)，即“链表”的长度。而第 d 层调用 height 函数的时间复杂度是 O(d)，所以整体的时间复杂度为高度时间复杂度 * 调用 height 函数的时间复杂度，即 O(n^2)。

 空间复杂度分析#
 该方法由于使用了递归，并且每次递归都调用了两次自身，导致会函数栈会按照等差数列开辟，所以该方法的空间复杂度应为 O(n^2)。
 */

// 上面的方法是自顶而上的，这样其实就会导致每层的高度都要重复计算。那么，我们可以使用后序遍历，这样每个节点的高度就能根据前面的结果算出来。
// 更优的方案：http://febook.hzfe.org/awesome-interview/book1/algorithm-balanced-binary-trees#解法二

//leetcode submit region end(Prohibit modification and deletion)
