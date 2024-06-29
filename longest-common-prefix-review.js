var longestCommonPrefix = function (strs) {
  let res = "";
  for (let i = 0; i < strs[0]?.length; i++) {
    let letter = strs[0][i];
    for (let j = 1; j < strs?.length; j++) {
      if (strs[j][i] !== letter) return res;
    }
    res += letter;
  }
  return res;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
