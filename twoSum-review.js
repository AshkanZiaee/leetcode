function twoSum(nums, target) {
  let myMap = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let complementary = target - nums[i];
    if (myMap.has(complementary)) res.push(i, myMap.get(complementary));
    else {
      myMap.set(nums[i], i);
    }
  }
  return res;
}

twoSum([11, 15, 2, 7], 9);
