var intToRoman = function (num) {
  let Dictionary = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ]
  let res = ""
  for (let i = Dictionary.length - 1; i >= 0; i--) {
    const [symbol, value] = Dictionary[i]
    if (num / value) {
      let count = num / value
      res += symbol.repeat(count)
      num = num % value
    }
  }
  return res
}
intToRoman(3749)
