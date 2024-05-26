function twoSum(nums, target) {
  let myMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    let complementary = target - nums[i]
    if (myMap.has(complementary)) {
      return [i, myMap.get(complementary)]
    } else {
      myMap.set(nums[i], i)
    }
  }
}

twoSum([2, 7, 11, 15], 9)
