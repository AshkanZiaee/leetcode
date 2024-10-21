var convertToTitle = function (columnNumber) {
  if (columnNumber === 0) return "";

  let lastCharIndex = (columnNumber - 1) % 26;
  let letter = String.fromCharCode(lastCharIndex + 65);
  return convertToTitle(Math.floor((columnNumber - 1) / 26)) + letter;
};
