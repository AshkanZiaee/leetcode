var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1) return 0;

  const grid = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let row = 0; row < m; row++) {
    if (obstacleGrid[row][0] === 1) {
      grid[row][0] = 0;
      break;
    } else {
      grid[row][0] = 1;
    }
  }
  for (let column = 0; column < n; column++) {
    if (obstacleGrid[0][column] === 1) {
      grid[0][column] = 0;
      break;
    } else {
      grid[0][column] = 1;
    }
  }

  for (let row = 1; row < m; row++) {
    for (let column = 1; column < n; column++) {
      if (obstacleGrid[row][column] === 1) {
        grid[row][column] = 0;
      } else {
        grid[row][column] = grid[row - 1][column] + grid[row][column - 1];
      }
    }
  }
  return grid[m - 1][n - 1];
};
