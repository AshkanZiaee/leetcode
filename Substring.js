var lengthOfLongestSubstring = function (s) {
  let leftPointer = 0;
  let longest = 0;
  let theSet = new Set();
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while (theSet.has(s[rightPointer])) {
      theSet.delete(s[leftPointer]);
      leftPointer++;
    }
    let w = rightPointer - leftPointer + 1;
    longest = Math.max(longest, w);
    theSet.add(s[rightPointer]);
  }
  return longest;
};

lengthOfLongestSubstring("pwwkew");
