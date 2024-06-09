var lengthOfLongestSubstring = function (s) {
  let leftPointer = 0
  let mySet = new Set()
  let longest = 0
  for (let rightPoitner = 0; rightPoitner < s.length; rightPoitner++) {
    while (mySet.has(s[rightPoitner])) {
      mySet.delete(s[leftPointer])
      leftPointer++
    }
    let w = rightPoitner - leftPointer + 1
    longest = Math.max(longest, w)
    mySet.add(s[rightPoitner])
  }
  return longest
}
console.log(lengthOfLongestSubstring("abcabcbb"))
