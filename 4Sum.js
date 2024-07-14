var fourSum = function (nums, target) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let p = j + 1;
      let k = nums.length - 1;
      while (p < k) {
        let sum = nums[i] + nums[j] + nums[p] + nums[k];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[p], nums[k]]);
          while (nums[p] === nums[p + 1]) p++;
          while (nums[k] === nums[k - 1]) k--;
          p++;
          k--;
        } else if (sum > target) k--;
        else {
          p++;
        }
      }
    }
  }
  return result;
};
