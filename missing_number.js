var missingNumber = function (nums) {
  let expectedSum = 0;
  for (let i = 0; i <= nums.length; i++) {
    console.log(i);
    expectedSum = expectedSum + i;
  }
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
  }
  return expectedSum - actualSum;
};
console.log(missingNumber([0, 1, 3, 4]));
