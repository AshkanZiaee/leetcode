var romanToInt = function (s) {
  romanToNum = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanToNum[s[i]] < romanToNum[s[i + 1]]) {
      sum += romanToNum[s[i + 1]] - romanToNum[s[i]];
      i++;
    } else {
      sum += romanToNum[s[i]];
    }
  }
  return sum;
};
