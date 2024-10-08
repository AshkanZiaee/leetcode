var findDisappearedNumbers = function (nums) {
  let missing = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    let markPosition = num - 1;
    if (nums[markPosition] > 0) {
      nums[markPosition] = -nums[markPosition];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing.push(i + 1);
    }
  }
  return missing;
};
