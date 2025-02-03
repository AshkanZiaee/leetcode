/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let w = right - left;
    let area = w * Math.min(height[left], height[right]);
    result = area > result ? area : result;
    if (height[left] < height[right]) left++;
    else {
      right--;
    }
  }
  return result;
};
