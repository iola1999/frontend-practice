/*
* 83. 删除排序链表中的重复元素
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

返回同样按升序排列的结果链表。

示例 1：
输入：head = [1,1,2]
输出：[1,2]

示例 2：
输入：head = [1,1,2,3,3]
输出：[1,2,3]
*  */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function deleteDuplicates2(head) {
    if (!head)
        return null;
    var curNode = head;
    while (curNode && curNode.next) {
        if (curNode.val === curNode.next.val) {
            curNode.next = curNode.next.next;
        }
        else {
            curNode = curNode.next;
        }
    }
    return head;
}
// 快慢指针
function deleteDuplicates(head) {
    var slow = head, fast = head;
    while (fast && fast.next) {
        fast = fast.next;
        if (slow.val !== fast.val) {
            slow.next = fast;
            slow = fast;
        }
    }
    slow.next = null;
    return head;
}
var sortedNodeList = [];
sortedNodeList.unshift(new ListNode(3));
sortedNodeList.unshift(new ListNode(3, sortedNodeList[0]));
sortedNodeList.unshift(new ListNode(2, sortedNodeList[0]));
sortedNodeList.unshift(new ListNode(1, sortedNodeList[0]));
sortedNodeList.unshift(new ListNode(1, sortedNodeList[0]));
console.log(deleteDuplicates(sortedNodeList[0]));
