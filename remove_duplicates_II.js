var removeDuplicates = function (nums) {
  let i = 0;

  for (let currentNum of nums) {
    if (i < 2 || currentNum !== nums[i - 2]) {
      nums[i] = currentNum;
      i++;
    }
  }
  return i;
};
