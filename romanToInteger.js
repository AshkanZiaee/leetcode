var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let total = 0
  for (let i = 0; i < s.length; i++) {
    let current = s[i]
    let next = s[i + 1]
    if (symbols[current] < symbols[next]) {
      total -= symbols[current]
    } else {
      total += symbols[current]
    }
  }
  console.log(total)
  return total
}
romanToInt("IV")
