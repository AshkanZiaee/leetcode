var intersect = function (nums1, nums2) {
  let result = [];
  const countMap = {};
  for (num of nums1) {
    countMap[num] = (countMap[num] || 0) + 1;
  }
  for (num of nums2) {
    if (countMap[num]) {
      result.push(num);
      countMap[num]--;
    }
  }
  return result;
};
console.log(intersect([1, 2, 2, 3, 4, 5], [2, 2, 3, 5, 6]));
