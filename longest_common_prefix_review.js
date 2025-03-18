var longestCommonPrefix = function (strs) {
  let commonLetters = "";
  for (let i = 0; i < strs[0].length; i++) {
    const letter = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (letter !== strs[j][i]) return commonLetters;
    }
    commonLetters += strs[0][i];
  }
  return commonLetters;
};
