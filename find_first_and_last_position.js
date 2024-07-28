var searchRange = function (nums, target) {
  function binarySearch(left, right, searchLeft) {
    result = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        result = mid;
        if (searchLeft) right = mid - 1;
        else {
          left = mid + 1;
        }
      } else if (nums[mid] > target) right = mid - 1;
      else {
        left = mid + 1;
      }
    }
    return result;
  }
  let firstPosition = binarySearch(0, nums.length - 1, true);
  let secondPosition = binarySearch(0, nums.length - 1, false);
  return [firstPosition, secondPosition];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
