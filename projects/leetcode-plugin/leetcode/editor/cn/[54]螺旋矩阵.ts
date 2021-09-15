//给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
//
//
//
// 示例 1：
//
//
//输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
//输出：[1,2,3,6,9,8,7,4,5]
//
//
// 示例 2：
//
//
//输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//输出：[1,2,3,4,8,12,11,10,9,5,6,7]
//
//
//
//
// 提示：
//
//
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100
//
// Related Topics 数组 矩阵 模拟 👍 866 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
function spiralOrder(matrix: number[][]): number[] {
  const result = [];
  let direction = "right",
    left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
  let i = 0,
    j = 0;
  const needCount = matrix.length * matrix[0].length;
  while (left <= right && top <= bottom) {
    if (direction === "right" && result.length < needCount) {
      for (; j <= right; j++) {
        result.push(matrix[i][j]);
      }
      j = right;
      i += 1;
      top += 1;
      direction = "bottom";
    }
    if (direction === "bottom" && result.length < needCount) {
      for (; i <= bottom; i++) {
        result.push(matrix[i][j]);
      }
      i = bottom;
      j -= 1;
      right -= 1;
      direction = "left";
    }
    if (direction === "left" && result.length < needCount) {
      for (; j >= left; j--) {
        result.push(matrix[i][j]);
      }
      j = left;
      i -= 1;
      bottom -= 1;
      direction = "top";
    }
    if (direction === "top" && result.length < needCount) {
      for (; i >= top; i--) {
        result.push(matrix[i][j]);
      }
      i = top;
      j += 1;
      left += 1;
      direction = "right";
    }
  }
  return result;
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
