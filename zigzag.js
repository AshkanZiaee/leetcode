function convert(s, numRows) {
  if (numRows === 1) return s
  let tempArrays = Array(numRows).fill("")
  let direction = true
  let count = 0
  for (let i = 0; i < s.length; i++) {
    tempArrays[count] += s[i]
    if (direction) count++
    else if (!direction) count--
    if (count === numRows - 1) direction = false
    if (count === 0) direction = true
  }
  return tempArrays.join("")
}

convert("PAYPALISHIRING", 3)
