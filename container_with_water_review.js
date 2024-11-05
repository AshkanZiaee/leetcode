var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let res = 0;
  while (leftPointer < rightPointer) {
    let w = rightPointer - leftPointer;

    res = Math.max(
      res,
      w * Math.min(height[rightPointer], height[leftPointer]),
    );

    if (height[leftPointer] < height[rightPointer]) leftPointer++;
    else {
      rightPointer--;
    }
  }
  return res;
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
