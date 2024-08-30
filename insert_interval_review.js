var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  const start = 0;
  const end = 1;
  const result = [];
  let currentInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let nextInterval = intervals[i];
    if (nextInterval[start] <= currentInterval[end]) {
      currentInterval[end] = Math.max(nextInterval[end], currentInterval[end]);
    } else {
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  result.push(currentInterval);
  return result;
};
