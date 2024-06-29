var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) left++;
    else {
      right--;
    }
  }

  return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
