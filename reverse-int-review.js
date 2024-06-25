var reverse = function (x) {
  let stringifiedNumber = String(x)
  let res = ""
  let isNeg = false
  for (let i = stringifiedNumber.length - 1; i >= 0; i--) {
    if (stringifiedNumber[i] === "-") {
      isNeg = true
      break
    }
    res += stringifiedNumber[i]
  }
  return isNeg ? -1 * Number(res) : Number(res)
}

console.log(reverse(-4560))
