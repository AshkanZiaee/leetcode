function nextPermutation(nums) {
  // Step 1: Find the pivot
  let i = nums.length - 2;
  console.log("i beginning", i);
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  console.log("i after", i);

  // Step 2: Find the successor and swap
  if (i >= 0) {
    let j = nums.length - 1;
    console.log("j beginning", j);

    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    console.log("j after", j);

    // Swap pivot and successor
    console.log("before swap", nums);

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  console.log("after swap", nums);

  // Step 3: Reverse the suffix
  console.log("before reverse", nums);
  reverse(nums, i + 1, nums.length - 1);
  console.log("after reverse", nums);
}

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

// Example usage:
let nums1 = [1, 2, 3, 6, 5, 4];
nextPermutation(nums1);
console.log(nums1); // Output: [1, 3, 2]
