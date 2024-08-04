var combinationSum = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < candidates.length; i++) {
    let j = i + 1;
    let k = candidates.length - 1;
    let sum = candidates[i];
    while (j < k) {
      if (sum === target) result.push(sum).toExponential;
    }
  }
};
