var lengthOfLongestSubstring = function (s) {
  let leftPointer = 0
  let longest = 0
  let mySet = new Set()
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while (mySet.has(s[rightPointer])) {
      mySet.delete(s[leftPointer])
      leftPointer++
    }
    let w = rightPointer - leftPointer + 1
    longest = Math.max(longest, w)
    mySet.add(s[rightPointer])
  }
  return longest
}
lengthOfLongestSubstring("abcabcbb")
