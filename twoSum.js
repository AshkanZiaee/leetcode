function twoSum(nums, target) {
  let myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complementary = target - nums[i];
    if (myMap.has(complementary)) return [i, myMap.get(complementary)];
    myMap.set(nums[i], i);
  }
}

console.log(twoSum([11, 15, 2, 7], 9));
