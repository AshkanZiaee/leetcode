var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) right = mid - 1;
    else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 4));
