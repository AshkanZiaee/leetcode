function convert(s, numRows) {
  if (numRows === 1) return s;
  let direction = true;
  let count = 0;
  const rowsArray = Array(numRows).fill("");

  for (let i = 0; i < s.length; i++) {
    rowsArray[count] = rowsArray[count] + s[i];

    if (direction === true) count++;
    else if (direction === false) count--;

    if (count === numRows - 1) direction = false;
    if (count === 0) direction = true;
  }
  return rowsArray.join("");
}

console.log(convert("PAYPALISHIRING", 3));
