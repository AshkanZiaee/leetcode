/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let column = 1; column < n; column++) {
    dp[0][column] = dp[0][column - 1] + grid[0][column];
  }

  for (let row = 1; row < m; row++) {
    dp[row][0] = dp[row - 1][0] + grid[row][0];
  }

  for (let row = 1; row < m; row++) {
    for (let column = 1; column < n; column++) {
      dp[row][column] =
        grid[row][column] + Math.min(dp[row - 1][column], dp[row][column - 1]);
    }
  }
  return dp[m - 1][n - 1];
};
