var productExceptSelf = function (nums) {
  let result = [];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * suffix;
    suffix = suffix * nums[i];
  }
  console.log(prefix);
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
