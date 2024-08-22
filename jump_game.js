var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    console.log("maxReach", maxReach);
    console.log("___________");
  }
  return true;
};

canJump([2, 3, 1, 1, 4]);
