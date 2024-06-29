function binarySearch(arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer <= rightPointer) {
    let middleIndex = Math.floor((rightPointer + leftPointer) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    if (target > arr[middleIndex]) {
      leftPointer = middleIndex + 1;
    } else {
      rightPointer = middleIndex - 1;
    }
  }
  return -1;
}

function recursiveBinarySearch(arr, target, left, right) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) return -1;
  let middleIndex = Math.floor((left + right) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, left, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, right);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
