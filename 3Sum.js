var threeSum = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    if (nums[i] === nums[i - 1]) continue;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
        j++;
        k--;
      } else if (sum > 0) k--;
      else {
        j++;
      }
    }
  }
  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);
