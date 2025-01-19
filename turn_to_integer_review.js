var myAtoi = function (s) {
  let arrayedString = s.split("");
  let isNegative = false;
  let result = [];
  let index = 0;
  let numberEntered = false;
  let sign = false;
  let mySet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (let i = 0; i < arrayedString.length; i++) {
    if (arrayedString[i] === " ") index++;
    else {
      temp = index;
      break;
    }
  }

  for (let i = index; i < arrayedString.length; i++) {
    if (arrayedString[i] === " ") break;
    else if ((arrayedString[i] === "+" || arrayedString[i] === "-") && !sign) {
      if (numberEntered) break;
      sign = true;
      if (arrayedString[i] === "-") isNegative = true;
      else {
        continue;
      }
    } else if (mySet.has(Number(arrayedString[i]))) {
      result.push(Number(arrayedString[i]));
      numberEntered = true;
      //   if (result[0] === 0 && result) break
    } else {
      break;
    }
  }
  result = isNegative
    ? result == 0
      ? 0
      : -1 * result.join("")
    : result.join("");
  if (result > 2 ** 31 - 1) {
    result = 2 ** 31 - 1;
  } else if (result < 2 ** 31 * -1) {
    result = 2 ** 31 * -1;
  }
  console.log(Number(result));
  return result;
};

myAtoi("000+85");
