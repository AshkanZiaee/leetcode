var subsetsWithDup = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  function backtrack(start, currentArr) {
    result.push([...currentArr]);
    for (let i = start; i <= nums.length - 1; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      currentArr.push(nums[i]);
      backtrack(i + 1, currentArr);
      currentArr.pop();
    }
  }
  backtrack(0, []);
  return result;
};

console.log(subsetsWithDup([1, 2, 2]));
