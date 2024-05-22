function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complementary = target - nums[i]
    if (map.has(complementary)) {
      return [i, map.get(complementary)]
    }
    map.set(nums[i], i)
  }
  return -1
}

console.log(twoSum([2, 7, 11, 15], 15))
