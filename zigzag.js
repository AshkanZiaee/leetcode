function convert(s, numRows) {
  if (numRows === 1) return s
  const arrayOfStrings = Array(numRows).fill("")
  let count = 0
  let direction = true

  for (let i = 0; i < s.length; i++) {
    if (direction) {
      arrayOfStrings[count] = arrayOfStrings[count] + s[i]
      count++
    } else if (!direction) {
      arrayOfStrings[count] = arrayOfStrings[count] + s[i]
      count--
    }
    if (count === 0) direction = true
    if (count === numRows - 1) direction = false
  }
  return arrayOfStrings.join("")
}

convert("PAYPALISHIRING", 7)
