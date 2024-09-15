var merge = function (nums1, m, nums2, n) {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[lastNonZero] = nums[i];
      lastNonZero++;
    }
  }
  for (let i = lastNonZero; i < nums.length; i++) {
    nums[i] = 0;
  }
};
