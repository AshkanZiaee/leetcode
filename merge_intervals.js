var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const start = 0;
  const end = 1;
  const result = [];
  let currentInterval = intervals[0];
  for (let i = 0; i < intervals.length; i++) {
    let nextInterval = intervals[i];
    if (nextInterval[start] <= currentInterval[end]) {
      currentInterval[end] = Math.max(currentInterval[end], nextInterval[end]);
    } else {
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  result.push(currentInterval);
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
