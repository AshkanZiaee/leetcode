var reverse = function (x) {
  x = String(x);
  let result = "";
  let isNeg = false;
  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] === "-") {
      isNeg = true;
      continue;
    }
    if (i === x.length - 1 && x[i] == 0) continue;
    result += x[i];
  }
  result = isNeg ? Number(-result) : Number(result);
  result = result > 2 ** 31 - 1 ? 0 : result < -(2 ** 31) ? 0 : result;
  return result;
};
