var maxArea = function (height) {
  let leftPointer = 0
  let rightPointer = height.length - 1
  let maxArea = 0

  while (leftPointer < rightPointer) {
    let width = rightPointer - leftPointer

    let currentArea =
      Math.min(height[leftPointer], height[rightPointer]) * width
    if (currentArea > maxArea) {
      maxArea = currentArea
    }
    if (height[leftPointer] < height[rightPointer]) leftPointer++
    else {
      rightPointer--
    }
  }
  return maxArea
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
