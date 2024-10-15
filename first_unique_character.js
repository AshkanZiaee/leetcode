var firstUniqChar = function (s) {
  const freqMap = new Map();
  for (let i = 0; i < s.length; i++) {
    freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (freqMap.get(s[i]) === 1) return i;
  }
  return -1;
};
