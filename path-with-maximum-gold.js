var getMaximumGold = function (grid) {
  let goldCollected = 0;
  for (let i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      const returnedValue = dfs(grid, i, j);
      goldCollected = Math.max(goldCollected, returnedValue);
    }
  }
  console.log(goldCollected);
  return goldCollected;
};

function dfs(grid, i, j) {
  console.log(i, j);
  if (
    j < 0 ||
    i < 0 ||
    i > grid?.length - 1 ||
    j > grid[i]?.length - 1 ||
    grid[i][j] === 0
  )
    return 0;

  let temp = grid[i][j];
  grid[i][j] = 0;

  const upSum = dfs(grid, i - 1, j);
  const downSum = dfs(grid, i + 1, j);
  const rightSum = dfs(grid, i, j + 1);
  const leftSum = dfs(grid, i, j - 1);

  grid[i][j] = temp;
  return temp + Math.max(upSum, downSum, rightSum, leftSum);
}

getMaximumGold([
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
]);
