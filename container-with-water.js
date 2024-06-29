var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length;
  let res = 0;
  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) leftPointer++;
    else {
      rightPointer--;
    }
    let w = rightPointer - leftPointer;

    res = Math.max(
      res,
      w * Math.min(height[rightPointer], height[leftPointer]),
    );
  }
  return res;
};
maxArea([1, 1]);
