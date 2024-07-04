var myAtoi = function (s) {
  let result = "";
  let index = 0;
  let isNegative = false;
  let upperLimit = 2 ** 31 - 1;
  let lowerLimit = -(2 ** 31);
  while (s[index] === " ") {
    index++;
  }

  if (s[index] === "+" || s[index] === "-") {
    isNegative = s[index] === "-";
    index++;
  }

  for (let i = index; i < s.length; i++) {
    let number = s.charCodeAt(i) - 48;
    if (number < 0 || number > 9) break;
    else {
      result = result + s[i];
    }
  }
  result = Number(result);
  result = isNegative ? -1 * result : result;
  result =
    result > upperLimit
      ? upperLimit
      : result < lowerLimit
        ? lowerLimit
        : result;
  return result;
};

console.log(myAtoi("   -042"));
