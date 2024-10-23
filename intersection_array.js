var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  let result = [];
  console.log(set1);
  for (let num of nums2) {
    if (set1.has(num)) result.push(num);
    set1.delete(num);
  }
  console.log(result);
  return result;
};

intersection([4, 9, 5, 4], [9, 4, 9, 8]);
