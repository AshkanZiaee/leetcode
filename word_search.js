var exist = function (board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0] && dfs(row, col, 0)) return true;
    }
  }

  return false;

  function dfs(row, col, index) {
    if (index === word.length) return true;
    if (
      row > board.length - 1 ||
      row < 0 ||
      col > board[0].length - 1 ||
      col < 0 ||
      board[row][col] !== word[index]
    )
      return false;
    board[row][col] = "#";
    if (
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1)
    )
      return true;
    board[row][col] = word[index];
  }
};
