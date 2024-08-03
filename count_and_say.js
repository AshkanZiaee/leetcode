var countAndSay = function (n) {
  if (n === 1) return "1";
  function getNextSequence(sequence) {
    let result = "";
    let i = 0;
    while (i < sequence.length) {
      let count = 1;
      while (i + 1 < sequence.length && sequence[i] === sequence[i + 1]) {
        count++;
        i++;
      }
      result = result + String(count) + sequence[i];
      i++;
    }
    return result;
  }
  let currentSequence = "1";
  for (let i = 2; i <= n; i++) {
    currentSequence = getNextSequence(currentSequence);
  }
  return currentSequence;
};

console.log(countAndSay(1));
