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

  for (let i = index; i < s.length; i++) {
    if (s[i] === "-") isNeg = true
    let num = s.charCodeAt(i) - 48
    if (num < 0 || num > 9) break
    // res *= 10
    res += num
  }
  let min = -(2 ** 31)
  let max = 2 ** 31
  res = res > max ? max : res < min ? min : res
  console.log("res", res)
  return isNeg ? -res : res
}

console.log(myAtoi("-14984"))
