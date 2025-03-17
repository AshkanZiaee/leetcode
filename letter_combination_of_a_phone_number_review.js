var letterCombinations = function (digits) {
  if (digits == "") return [];
  let result = [""];
  const digitMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  for (let digit of digits) {
    let letters = digitMap[digit];
    let temp = [];
    while (result.length > 0) {
      let combination = result.shift();
      for (let letter of letters) {
        temp.push(combination + letter);
      }
    }
    result = temp;
  }
  return result;
};
