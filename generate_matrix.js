var generateMatrix = function (n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  let top = 0;
  let left = 0;
  let bottom = n - 1;
  let right = n - 1;
  const size = n * n;
  let num = 1;

  while (num <= size) {
    for (let i = left; i <= right && num <= size; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;
    for (let i = top; i <= bottom && num <= size; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;
    for (let i = right; i >= left && num <= size; i--) {
      matrix[bottom][i] = num;
      num++;
    }
    bottom--;
    for (let i = bottom; i >= top && num <= size; i--) {
      matrix[i][left] = num;
      num++;
    }
    left++;
  }
  return matrix;
};
