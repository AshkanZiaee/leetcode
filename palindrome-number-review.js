var isPalindrome = function (x) {
  let result = "";
  const stringNumber = String(x);
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    result = result + stringNumber[i];
  }
  return result === stringNumber;
};

console.log(isPalindrome(-131));
