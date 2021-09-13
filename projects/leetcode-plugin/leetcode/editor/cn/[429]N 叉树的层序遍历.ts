//给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
//
// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
//
//
//
// 示例 1：
//
//
//
//
//输入：root = [1,null,3,2,4,null,5,6]
//输出：[[1],[3,2,4],[5,6]]
//
//
// 示例 2：
//
//
//
//
//输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,
//null,13,null,null,14]
//输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
//
//
//
//
// 提示：
//
//
// 树的高度不会超过 1000
// 树的节点总数在 [0, 10^4] 之间
//
// Related Topics 树 广度优先搜索 👍 173 👎 0

class Node {
  val: number;
  children: Node[];

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    // 这一层的
    const level: number[] = [];
    const bakLength = queue.length;
    for (let i = 0; i < bakLength; i++) {
      const cur = queue.shift();
      level.push(cur.val);
      // cur.children.forEach(item => queue.push(item));
      queue.push(...cur.children);
    }
    res.push(level);
  }
  return res;
}

//leetcode submit region end(Prohibit modification and deletion)
