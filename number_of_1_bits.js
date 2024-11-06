var hammingWeight = function (n) {
  let bNumber = n.toString(2);
  let count = 0;
  for (let num of bNumber) if (num === "1") count++;
  return count;
};
