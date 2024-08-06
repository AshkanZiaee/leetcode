var combinationSum2 = function (candidates, target) {
  let result = [];
  candiates = candidates.sort((a, b) => a - b);
  function backtrack(remaining, start, path) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    } else if (remaining < 0) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(remaining - candidates[i], i + 1, path);
      path.pop();
    }
  }
  backtrack(target, 0, []);
  return result;
};
