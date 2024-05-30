var convert = function (s, numRows) {
  if (numRows === 1) return s
  let count = 0
  let turn = true
  let res = Array(numRows).fill("")
  for (let i = 0; i < s.length; i++) {
    if (turn) {
      res[count] = res[count] + s[i]
      count++
    } else if (!turn) {
      res[count] = res[count] + s[i]
      count--
    }
    if (count === 0) turn = true
    if (count === numRows - 1) turn = false
  }
  return res.join("")
}

console.log(convert("PAYPALISHIRING", 3))
