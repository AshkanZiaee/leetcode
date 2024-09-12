var moveZeroes = function (nums) {
  let lastNonZeroElement = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroElement] = nums[i];
      lastNonZeroElement++;
    }
  }
  for (let i = lastNonZeroElement; i <= nums.length - 1; i++) {
    nums[i] = 0;
  }
};
