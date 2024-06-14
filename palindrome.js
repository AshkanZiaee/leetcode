var isPalindrome = function (x) {
  const stringifiedNumber = String(x)
  let res = 0
  for (let i = stringifiedNumber.length - 1; i >= 0; i--) {
    res *= 10
    res += Number(stringifiedNumber[i])
  }
  return res === x
}

console.log(isPalindrome(357))
