function reverse(x) {
  const stringifiedInt = String(x)
  let res = ""
  let upperLimit = 2 ** 31 - 1
  let lowerLimit = -(2 ** 31)
  let isNegative = false
  for (let i = stringifiedInt.length - 1; i >= 0; i--) {
    if (stringifiedInt[i] === "-") {
      isNegative = true
      continue
    }
    res += stringifiedInt[i]
  }
  const numberedRes = isNegative ? -Number(res) : Number(res)

  return numberedRes > upperLimit
    ? 0
    : numberedRes < lowerLimit
    ? 0
    : numberedRes
}
console.log(reverse(-123))
