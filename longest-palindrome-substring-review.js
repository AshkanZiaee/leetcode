function longestPalindrome(s) {
  let result = ""

  function isPalindrome(s, leftPointer, rightPointer) {
    res = ""
    while (
      s[leftPointer] === s[rightPointer] &&
      leftPointer >= 0 &&
      rightPointer < s.length
    ) {
      res = s.slice(leftPointer, rightPointer + 1)
      leftPointer--
      rightPointer++
    }
    return res
  }
  for (let i = 0; i < s.length; i++) {
    let evenRes = isPalindrome(s, i, i)
    let oddRes = isPalindrome(s, i, i + 1)
    let tempRes = evenRes.length > oddRes.length ? evenRes : oddRes
    result = tempRes.length > result.length ? tempRes : result
  }
  return result
}

longestPalindrome("cbbd")
