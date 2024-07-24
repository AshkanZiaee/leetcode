var divide = function (dividend, divisor) {
  const UPPER_LIMIT = 2 ** 31 - 1;
  const LOWER_LIMIT = -(2 ** 31);
  let count = 0;
  let isNeg = Math.sign(dividend) !== Math.sign(divisor);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  if (divisor === 0 || dividend === 0) return 0;
  while (dividend >= divisor) {
    let temp = divisor;
    let multiple = 1;
    while (temp + temp <= dividend) {
      temp = temp + temp;
      multiple = multiple + multiple;
    }
    dividend = dividend - temp;
    count = count + multiple;
  }

  count = isNeg ? -count : count;
  count =
    count > UPPER_LIMIT
      ? UPPER_LIMIT
      : count < LOWER_LIMIT
        ? LOWER_LIMIT
        : count;
  return count;
};

console.log(divide(1000, 5));
