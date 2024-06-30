var threeSumClosest = function (nums, target) {
  let closestRes = nums[0] + nums[1] + nums[nums.length - 1];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > target) k--;
      else {
        j++;
      }
      closestRes =
        Math.abs(target - sum) < Math.abs(target - closestRes)
          ? sum
          : closestRes;
    }
  }
  return closestRes;
};

threeSumClosest([-1, 2, 1, -4], 1);
