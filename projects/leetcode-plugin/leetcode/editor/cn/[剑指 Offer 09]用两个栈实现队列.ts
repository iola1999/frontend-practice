//用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的
//功能。(若队列中没有元素，deleteHead 操作返回 -1 )
//
//
//
// 示例 1：
//
// 输入：
//["CQueue","appendTail","deleteHead","deleteHead"]
//[[],[3],[],[]]
//输出：[null,null,3,-1]
//
//
// 示例 2：
//
// 输入：
//["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
//[[],[],[5],[2],[],[]]
//输出：[null,-1,null,null,5,2]
//
//
// 提示：
//
//
// 1 <= values <= 10000
// 最多会对 appendTail、deleteHead 进行 10000 次调用
//
// Related Topics 栈 设计 队列 👍 308 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
class CQueue {
  stackInput: number[]; // 栈的操作有 入栈 出栈，push  pop
  stackOutput: number[];

  constructor() {
    this.stackInput = [];
    this.stackOutput = [];
  }

  // push
  appendTail(value: number): void {
    this.stackInput.push(value);
  }

  // shift
  deleteHead(): number {
    // 判断 output 栈是否为空，是空的话判断 input 栈是否为空
    if (!this.stackOutput.length) {
      if (!this.stackInput.length) {
        return -1;
      } else {
        // 全部转移到 output，注意这时前提是 output 已经空了
        // while (this.stackInput.length) {
        //   this.stackOutput.push(this.stackInput.pop());
        // }
        this.stackOutput.push(...this.stackInput.reverse());
        this.stackInput = [];
        return this.stackOutput.pop();
      }
    } else {
      return this.stackOutput.pop();
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
//leetcode submit region end(Prohibit modification and deletion)
