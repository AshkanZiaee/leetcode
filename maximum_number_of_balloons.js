var maxNumberOfBalloons = function (text) {
  let count = 0;
  const freq = {};
  for (let letter of text) {
    freq[letter] = (freq[letter] || 0) + 1;
  }
  while (
    freq["b"] >= 1 &&
    freq["a"] >= 1 &&
    freq["l"] >= 2 &&
    freq["o"] >= 2 &&
    freq["n"] >= 1
  ) {
    freq["b"]--;
    freq["a"]--;
    freq["l"] = freq["l"] - 2;
    freq["o"] = freq["o"] - 2;
    freq["n"]--;
    count++;
  }
  return count++;
};
