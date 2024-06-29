var myAtoi = function (s) {
  let index = 0;
  let isNeg = false;
  let upperLimit = 2 ** 31 - 1;
  let lowerLimit = 2 ** 31 * -1;
  let res = "";
  while (s[index] === " ") {
    index++;
  }
  if (s[index] === "+" || s[index] === "-") {
    isNeg = s[index] === "-";
    index++;
  }
  for (let i = index; i < s.length; i++) {
    let num = s.charCodeAt(i) - 48;
    if (num < 0 || num > 9) {
      break;
    } else {
      res += s[i];
    }
  }
  res = isNeg ? Number(res) * -1 : Number(res);
  res = res > upperLimit ? upperLimit : res < lowerLimit ? lowerLimit : res;
  return res;
};

console.log(myAtoi("   -042"));
