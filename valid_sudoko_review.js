var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let visitedValuesCol = new Set();
    let visitedValuesRow = new Set();
    for (let j = 0; j < 9; j++) {
      let rowValue = board[i][j];
      let colValue = board[j][i];
      if (rowValue !== ".") {
        if (visitedValuesRow.has(rowValue)) return false;
        else {
          visitedValuesRow.add(rowValue);
        }
      }

      if (colValue !== ".") {
        if (visitedValuesCol.has(colValue)) return false;
        else {
          visitedValuesCol.add(colValue);
        }
      }
    }
  }

  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      let visitedValuesBox = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let currentValue = board[boxRow * 3 + i][boxCol * 3 + j];
          if (currentValue !== ".") {
            if (visitedValuesBox.has(currentValue)) return false;
            else {
              visitedValuesBox.add(currentValue);
            }
          }
        }
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
