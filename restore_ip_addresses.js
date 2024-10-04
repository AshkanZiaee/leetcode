var restoreIpAddresses = function (s) {
  const result = [];
  function isValid(segment) {
    if (segment.length > 1 && segment[0] === "0") return false;
    if (Number(segment) > 255 || Number(segment) < 0) return false;
    return true;
  }

  function backtrack(start, parts) {
    if (parts.length === 4 && start === s.length) {
      result.push(parts.join("."));
      return;
    }
    if (parts.length === 4) return;
    for (let length = 1; length <= 3; length++) {
      const segment = s.slice(start, start + length);
      if (isValid(segment)) {
        parts.push(segment);
        backtrack(start + length, parts);
        parts.pop();
      }
    }
  }
  backtrack(0, []);
  return result;
};
