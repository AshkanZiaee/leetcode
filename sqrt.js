var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    console.log(left);
    console.log(right);
    console.log("---");
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) left = mid + 1;
    else {
      right = mid - 1;
    }
  }

  return right;
};

console.log(mySqrt(8));
