class ListNode {
  constructor(val, next) {
    this.val = val ? val : undefined;
    this.next = next ? next : null;
  }
}

var removeNthFromEnd = function (head, n) {
  const dummyNode = new ListNode();
  dummyNode.next = head;
  let leftPointer = dummyNode;
  let rightPointer = head;
  while (n > 0 && rightPointer) {
    rightPointer = rightPointer.next;
    n = n - 1;
  }
  while (rightPointer) {
    rightPointer = rightPointer.next;
    leftPointer = leftPointer.next;
  }
  leftPointer = leftPointer.next.next;
  return dummyNode.next;
};
