var moveZeroes = function (nums) {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZero] = nums[i];
      lastNonZero++;
    }
  }
  for (let j = lastNonZero; j < nums.length; j++) {
    nums[j] = 0;
  }
};
