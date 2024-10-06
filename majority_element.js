var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) count++;
    else {
      count--;
    }
  }
  return candidate;
};
