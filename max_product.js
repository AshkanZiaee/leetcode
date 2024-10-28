var maxProduct = function (nums) {
  let maxProduct = nums[0];
  let maxProd = nums[0];
  let minProd = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    if (current < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }
    maxProd = Math.max(current, current * maxProd);
    minProd = Math.min(current, current * minProd);
    maxProduct = Math.max(maxProd, maxProduct);
  }
  console.log(maxProd);
  console.log(minProd);
  return maxProduct;
};

console.log(maxProduct([2, 3, -2, 4, -5]));
