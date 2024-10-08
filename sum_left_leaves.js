var sumOfLeftLeaves = function (root) {
  let sum = 0;
  function traverse(node, isLeftChild) {
    if (!node) return;
    if (!node.left && !node.right && isLeftChild) {
      sum = sum + node.val;
    }
    traverse(node.left, true);
    traverse(node.right, false);
  }
  traverse(root, false);
  return sum;
};
