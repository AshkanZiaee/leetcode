var containsDuplicate = function (nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) return true;
    else {
      seen.add(num);
    }
  }
  return false;
};
