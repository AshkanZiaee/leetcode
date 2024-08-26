var uniquePaths = function (m, n) {
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let row = 0; row < m; row++) {
    dp[row][0] = 1;
  }
  for (let column = 0; column < n; column++) {
    dp[0][column] = 1;
  }
  for (let row = 1; row < m; row++) {
    for (let column = 1; column < n; column++) {
      dp[row][column] = dp[row - 1][column] + dp[row][column - 1];
    }
  }

  return dp[m - 1][n - 1];
};
