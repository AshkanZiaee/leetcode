var isValidSudoku = function (board) {
  let visitedValuesColumns = new Set();
  for (let i = 0; i < board.length; i++) {
    let colNumber = board[i][0].charCodeAt() - 48;
    if (visitedValuesColumns.has(board[i][0])) {
      return false;
    } else if (colNumber >= 0 && colNumber <= 9) {
      visitedValuesColumns.add(board[i][0]);
    }
    let visitedValuesRows = new Set();
    for (let j = 0; j < board[i].length; j++) {
      let rowNumber = board[i][j].charCodeAt() - 48;
      if (visitedValuesRows.has(board[i][j])) {
        return false;
      } else if (rowNumber >= 0 && rowNumber <= 9) {
        visitedValuesRows.add(board[i][j]);
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ]),
);
