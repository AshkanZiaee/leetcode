var countBits = function (n) {
  let bNumber = n.toString(2);
  let arrBNumber = bNumber.split("");
  let count = 0;
  for (let num of arrBNumber) if (num === "1") count++;
  return count;
};

console.log(countBits(5));
