function convert(s, numRows) {
  if (numRows === 1) return s
  let res = new Array(numRows).fill("")
  let direction = false
  let count = 0
  for (let i = 0; i < s.length; i++) {
    res[count] += s[i]
    if (count >= numRows - 1) {
      direction = !direction
    } else if (count === 0) direction = !direction
    direction ? count++ : count--
  }
  return res.join("")
}

convert("AB", 3)
