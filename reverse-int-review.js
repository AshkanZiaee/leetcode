var reverse = function (x) {
  let stringifiedNumber = String(x)
  let res = ""
  let symbol = ""
  for (let i = stringifiedNumber.length - 1; i >= 0; i--) {
    if (stringifiedNumber[i] === "-" || stringifiedNumber[i] === "+") {
      symbol = stringifiedNumber[i]
    }
    res += stringifiedNumber[i]
  }
  res = parseInt(symbol + res)
  if (res > 2 ** 31 || res < 2 ** 31 * -1) return 0
  return res
}

console.log(reverse(-4560))
