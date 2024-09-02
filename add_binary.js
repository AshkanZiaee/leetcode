var addBinary = function (a, b) {
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? Number(a[i]) : 0;
    const bitB = j >= 0 ? Number(b[j]) : 0;
    const sum = bitA + bitB + carry;

    result = String(sum % 2) + result;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }
  return result;
};
