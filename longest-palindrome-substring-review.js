function longestPalindrome(s) {
  let res = ""
  let left = 0
  let right = 0
  function isPalindrome(l, r, s) {
    let result = ""
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      result = s.slice(l, r + 1)
      l--
      r++
    }

    return result
  }
  for (let i = 0; i < s.length; i++) {
    left = i
    right = i
    let evenPal = isPalindrome(left, right + 1, s)
    let oddPal = isPalindrome(left, right, s)
    let resPal = evenPal.length > oddPal.length ? evenPal : oddPal
    res = res.length > resPal.length ? res : resPal
  }
  return res
}

longestPalindrome("cbbd")
