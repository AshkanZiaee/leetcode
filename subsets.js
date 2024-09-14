var subsets = function (nums) {
  const result = [];

  function backtrack(index, currentArr) {
    if (index === nums.length) {
      result.push([...currentArr]);
      return;
    }
    currentArr.push(nums[index]);
    backtrack(index + 1, currentArr);

    currentArr.pop();
    backtrack(index + 1, currentArr);
  }

  backtrack(0, []);

  return result;
};
