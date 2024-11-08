var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  reverse(nums, i + 1, nums.length - 1);
  function reverse(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
};
