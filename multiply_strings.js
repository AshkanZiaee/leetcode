var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let resultArr = Array(num1.length + num2.length).fill(0);
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      let product = (num1[i] - "0") * (num2[j] - "0");
      let tempSum = resultArr[i + j] + product;
      resultArr[i + j] = tempSum % 10;
      resultArr[i + j + 1] += Math.floor(tempSum / 10);
    }
  }
  resultArr = resultArr.reverse();
  while (resultArr[0] === 0) {
    resultArr.shift();
  }
  return resultArr.join("");
};

console.log(multiply("12", "34"));
