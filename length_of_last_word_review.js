var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  while (s[i] === " ") {
    i--;
  }
  s = s.slice(0, i + 1);
  s = s.split(" ");
  return s[s.length - 1].length;
};
