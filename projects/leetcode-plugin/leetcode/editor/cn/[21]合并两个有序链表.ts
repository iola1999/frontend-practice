//将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//
//
//
// 示例 1：
//
//
//输入：l1 = [1,2,4], l2 = [1,3,4]
//输出：[1,1,2,3,4,4]
//
//
// 示例 2：
//
//
//输入：l1 = [], l2 = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：l1 = [], l2 = [0]
//输出：[0]
//
//
//
//
// 提示：
//
//
// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列
//
// Related Topics 递归 链表 👍 1917 👎 0

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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;
  let aPtr: ListNode | null = l1,
    bPtr: ListNode | null = l2;
  let result: ListNode | null;
  if (l1.val > l2.val) {
    result = l2;
    bPtr = bPtr.next;
  } else {
    result = l1;
    aPtr = aPtr.next;
  }
  let resultPtr: ListNode | null = result;
  while (aPtr && bPtr) {
    if (aPtr.val < bPtr.val) {
      resultPtr.next = aPtr;
      aPtr = aPtr.next;
    } else {
      resultPtr.next = bPtr;
      bPtr = bPtr.next;
    }
    resultPtr = resultPtr.next
  }
  if (aPtr) resultPtr.next = aPtr;
  if (bPtr) resultPtr.next = bPtr;
  return result;
}

//leetcode submit region end(Prohibit modification and deletion)
