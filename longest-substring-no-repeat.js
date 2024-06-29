var lengthOfLongestSubstring = function (s) {
  const myMap = new Map();
  let res = "";
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while (myMap.has(s[rightPointer])) {
      myMap.delete(s[leftPointer]);
      leftPointer++;
    }
    let w = rightPointer - leftPointer + 1;
    res = Math.max(res, w);
    myMap.set(s[rightPointer]);
  }
  return res;
};
console.log(lengthOfLongestSubstring("pwwkew"));
