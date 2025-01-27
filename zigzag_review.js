var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const result = new Array(numRows).fill("");
  let count = 0;
  let reverse = false;
  for (let i = 0; i < s.length; i++) {
    result[count] = result[count] + s[i];
    if (reverse) count--;
    else {
      count++;
    }
    if (count === numRows - 1) {
      reverse = true;
    }
    if (count === 0) {
      reverse = false;
    }
  }
  return result.join("");
};
