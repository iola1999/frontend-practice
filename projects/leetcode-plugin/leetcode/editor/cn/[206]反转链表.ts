//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
//
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4,5]
//输出：[5,4,3,2,1]
//
//
// 示例 2：
//
//
//输入：head = [1,2]
//输出：[2,1]
//
//
// 示例 3：
//
//
//输入：head = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
//
//
//
//
// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
//
//
// Related Topics 递归 链表
// 👍 1901 👎 0
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head,
    next: ListNode | null = head && head.next;
  while (next) {
    const bak: ListNode | null = next && next.next;
    next.next = current;
    current = next;
    next = bak;
  }
  head && (head.next = null); // 如果双指针是 prev = null、cur 就不用这一步了
  return current;
}

//leetcode submit region end(Prohibit modification and deletion)

const three: ListNode = new ListNode(3);
const two: ListNode = new ListNode(2, three);
const one: ListNode = new ListNode(1, two);

const input: ListNode[] = [one, two, three];
console.log(reverseList(input[0]));
