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
  for (let i = 0; i < s.length - 1; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      total -= symbols[s[i]]
    } else {
      total += symbols[s[i]]
    }
  }
  return total
}
