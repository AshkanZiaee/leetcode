var generateParenthesis = function (n) {
  let result = [];

  function backtrack(openCount, closeCount, n, currentString) {
    if (openCount === n && closeCount === n) result.push(currentString);
    if (openCount < n) {
      backtrack(openCount + 1, closeCount, n, currentString + "(");
    }
    if (closeCount < openCount) {
      backtrack(openCount, closeCount + 1, n, currentString + ")");
    }
  }
  backtrack(0, 0, n, "");
  return result;
};
