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
    if (num < 0 || num > 9) {
      break
    }
    res *= 10
    res += num
  }
  let min = -(2 ** 31)
  let max = 2 ** 31 - 1
  res = res > max ? max : res < min ? min : res
  return isNeg ? -res : res
}

console.log(myAtoi("+1"))
