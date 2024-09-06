var sortColors = function (nums) {
  let count = [0, 0, 0];
  for (let i = 0; i <= nums.length - 1; i++) {
    count[nums[i]] += 1;
  }
  let index = 0;
  for (let i = 0; i < count[0]; i++) {
    nums[index++] = 0;
  }

  for (let i = 0; i < count[1]; i++) {
    nums[index++] = 1;
  }

  for (let i = 0; i < count[2]; i++) {
    nums[index++] = 2;
  }
};
