var missingNumber = function (nums) {
  let expectedSum = 0;
  for (let i = 0; i <= nums.length; i++) {
    expectedSum = expectedSum + i;
  }
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
  }
  return expectedSum - actualSum;
};
