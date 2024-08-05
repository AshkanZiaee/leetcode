var combinationSum = function (candidates, target) {
  let result = [];
  function backtrack(remaining, start, path) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    } else if (remaining < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(remaining - candidates[i], i, path);
      path.pop();
    }
  }
  backtrack(target, 0, []);
  return result;
};
