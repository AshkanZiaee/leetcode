var lengthOfLongestSubstring = function (s) {
  const myMap = new Map();
  let res = "";
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while (myMap.has(s[rightPointer])) {
      console.log("rightPointer", rightPointer);
      myMap.delete(s[leftPointer]);
      leftPointer++;
    }
    let w = rightPointer - leftPointer + 1;
    res = Math.max(res, w);
    myMap.set(s[rightPointer]);
    console.log(myMap);
  }
  console.log("left", s[leftPointer], leftPointer);
  console.log(myMap);
  return res;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
