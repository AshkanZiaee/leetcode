var myAtoi = function (s) {
  let index = 0
  let res = 0
  let isNeg = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue
    else {
      index = i
      break
    }
  }

  if (s[index] === "-" || s[index] === "+") {
    isNeg = s[index] === "-"
    index++
  }
  for (let i = index; i < s.length; i++) {
    let num = s.charCodeAt(i) - 48
    if (num < 0 || num > 9) break
    res *= 10
    res += num
  }
  let upperLimit = 2 ** 31 - 1
  let lowerLimit = -(2 ** 31)
  res = isNeg ? -res : res
  return res > upperLimit ? upperLimit : res < lowerLimit ? lowerLimit : res
}

console.log(myAtoi("     -91283472332"))
