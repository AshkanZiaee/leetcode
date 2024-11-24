var isPalindrome = function (s) {
  s = s.toLowerCase();
  let updatedString = "";
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    )
      updatedString += s[i];
  }
  return updatedString === updatedString.split("").reverse().join("");
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
