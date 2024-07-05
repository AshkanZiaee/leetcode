var isPalindrome = function (x) {
  let stringifiedNumber = String(x);
  let res = "";
  for (let i = stringifiedNumber.length - 1; i >= 0; i--) {
    res += stringifiedNumber[i];
  }
  return res === stringifiedNumber;
};

console.log(isPalindrome(-131));
