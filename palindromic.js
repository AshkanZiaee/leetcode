function longestPalindrome(s) {
  let palindrome = "";

  function isPalindrome(left, right, s) {
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = isPalindrome(i, i, s);
    let evenPalindrome = isPalindrome(i, i + 1, s);
    let currentPalindrome =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;
    palindrome =
      currentPalindrome.length > palindrome.length
        ? currentPalindrome
        : palindrome;
  }
  return palindrome;
}

longestPalindrome("babad");
