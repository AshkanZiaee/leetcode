var isSameTree = function (p, q) {
  function checkTree(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return (
      left.val === right.val &&
      checkTree(left.left, right.left) &&
      checkTree(left.right, right.right)
    );
  }
  return checkTree(p, q);
};
