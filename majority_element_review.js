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
    console.log(count);
    return candidate;
  };
  
  console.log([3, 3, 2, 2, 2, 3, 3]);
  