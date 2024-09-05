var setZeroes = function (matrix) {
  let positions = [];
  const m = matrix.length - 1;
  const n = matrix[0].length - 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (matrix[i][j] === 0) positions.push([i, j]);
    }
  }
  for (let i = 0; i <= positions.length - 1; i++) {
    const [row, column] = positions[i];
    for (let i = 0; i <= m; i++) {
      matrix[i][column] = 0;
    }

    for (let j = 0; j <= n; j++) {
      matrix[row][j] = 0;
    }
  }
};
