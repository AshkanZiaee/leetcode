var intToRoman = function (num) {
  let result = "";
  const romanObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  Object.entries(romanObj).forEach((pair) => {
    const [symbol, value] = pair;
    if (num / value > 0) {
      let count = Math.floor(num / value);
      result = result + symbol.repeat(count);
      num = num % value;
    }
  });
  return result;
};
intToRoman(3749);
