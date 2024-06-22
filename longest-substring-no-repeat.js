var lengthOfLongestSubstring = function (s) {
  let leftPointer = 0
  let mySet = new Set()
  let res = 0
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while (mySet.has(s[rightPointer])) {
      mySet.delete(s[leftPointer])
      leftPointer++
    }
    let w = rightPointer - leftPointer + 1
    res = Math.max(res, w)
    mySet.add(s[rightPointer])
  }
  return res
}
console.log(lengthOfLongestSubstring("pwwkew"))
