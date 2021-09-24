//给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
//
// 说明：每次只能向下或者向右移动一步。
//
//
//
// 示例 1：
//
//
//输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
//输出：7
//解释：因为路径 1→3→1→1→1 的总和最小。
//
//
// 示例 2：
//
//
//输入：grid = [[1,2,3],[4,5,6]]
//输出：12
//
//
//
//
// 提示：
//
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 100
//
// Related Topics 数组 动态规划 矩阵 👍 1005 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
function minPathSum(grid: number[][]): number {
  const costMap = new Array(grid.length);
  for (let i = 0; i < costMap.length; i++) {
    costMap[i] = new Array(grid[0].length);
  }
  costMap[0][0] = grid[0][0];
  for (let i = 1; i < grid.length; i++) {
    costMap[i][0] = costMap[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < grid[0].length; i++) {
    costMap[0][i] = costMap[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      costMap[i][j] = Math.min(costMap[i - 1][j], costMap[i][j - 1]) + grid[i][j];
    }
  }
  return costMap[grid.length - 1][grid[0].length - 1];
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]));
