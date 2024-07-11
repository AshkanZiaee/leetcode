var romanToInt = function (s) {
  let result = 0;
  const symbolsToValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    if (symbolsToValue[s[i]] < symbolsToValue[s[i + 1]]) {
      result = result - symbolsToValue[s[i]];
    } else {
      result = result + symbolsToValue[s[i]];
    }
  }
  return result;
};
romanToInt("MCMXCIV");
