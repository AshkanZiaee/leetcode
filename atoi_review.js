/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let numSet = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  let result = "";
  s = s.trim();
  let isNeg = false;
  let i = 0;
  if (s[i] === "-" || s[i] === "+") {
    isNeg = s[i] === "-";
    i++;
  }
  while (i < s.length && s[i] === "0") {
    i++;
  }
  for (; i < s.length; i++) {
    if (numSet.has(s[i])) {
      result += s[i];
    } else {
      break;
    }
  }
  if (result === "") return 0;
  result = Number(result);
  result = isNeg ? result * -1 : result;
  result =
    result > 2 ** 31 - 1
      ? 2 ** 31 - 1
      : result < -(2 ** 31)
        ? -(2 ** 31)
        : result;
  return result;
};
