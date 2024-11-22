var isValid = function (s) {
  const mapping = { ")": "(", "]": "[", "}": "{" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar in mapping) {
      let topValue = stack.pop();
      if (mapping[currentChar] !== topValue) return false;
    } else {
      stack.push(currentChar);
    }
  }
  return stack.length === 0;
};
