var getSum = function (a, b) {
  while (b !== 0) {
    const sumWithoutCarry = a ^ b;
    const carry = (a & b) << 1;

    a = sumWithoutCarry;
    b = carry;
  }
  return a;
};
