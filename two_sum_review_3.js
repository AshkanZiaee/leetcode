var twoSum = function (nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (numMap.has(remainder)) {
      return [i, numMap.get(remainder)];
    } else {
      numMap.set(nums[i], i);
    }
  }
};
