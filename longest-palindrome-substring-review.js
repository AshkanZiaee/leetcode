function longestPalindrome(s) {
  let result
  function isPal(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l++
      r--
    }
    return s.slice(l + 1, r)
  }

  for (let i = 0; i < s.length; i++) {
    let oddPal = isPal(s, i, i)
    let evenPal = isPal(s, i, i + 1)
    let palResult = oddPal.length < evenPal.length ? evenPal : oddPal
    result = result.length < palResult.length ? palResult : result
  }
  result
}
