var intToRoman = function (num) {
  const romanTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let res = ""
  Object.entries(romanTable).forEach((letter) => {
    let [symbol, value] = letter
    if (num / value >= 1) {
      let remainder = Math.floor(num / value)
      res += symbol.repeat(remainder)
      num = num % value
    }
  })

  return res
}

intToRoman(3749)
