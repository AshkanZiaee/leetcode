var reverse = function (x) {
  let stringifiedNumber = String(x);
  let res = "";
  let isNeg = false;
  for (let i = stringifiedNumber.length - 1; i >= 0; i--) {
    if (stringifiedNumber[i] === "-") {
      isNeg = true;
      break;
    }
    res += stringifiedNumber[i];
  }
  res = Number(res);
  if (res > 2 ** 31 - 1) return 0;
  if (res < 2 ** 31 * -1) return 0;
  return isNeg ? -1 * res : res;
};

console.log(reverse(-4560));
