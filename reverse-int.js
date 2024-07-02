function reverse(x) {
  const stringNumber = String(x);
  let result = "";
  let isNeg = false;
  const upperLimit = 2 ** 31 - 1;
  const lowerLimit = -(2 ** 31);
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    if (stringNumber[i] === "-") {
      isNeg = true;
      continue;
    }
    result = result + stringNumber[i];
  }
  result = Number(result);
  result = isNeg === true ? -1 * result : result;
  if (result > upperLimit) return 0;
  else if (result < lowerLimit) return 0;
  return result;
}
console.log(reverse(-1230));
