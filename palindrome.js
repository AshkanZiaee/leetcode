var isPalindrome = function (x) {
  const arrayedNumbers = JSON.stringify(x).split("")
  let res = ""
  for (let i = arrayedNumbers.length - 1; i >= 0; i--) {
    res += arrayedNumbers[i]
  }
  return x === Number(res) ? true : false
}

console.log(isPalindrome(357))
