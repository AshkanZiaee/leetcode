class ListNode {
  constructor(val, next) {
    this.val = val ? val : undefined;
    this.next = next ? next : null;
  }
}

var removeNthFromEnd = function (head, n) {
  let dummyNode = new ListNode(0, head);
  let leftPointer = dummyNode;
  let rightPointer = head;

  while (n > 0 && rightPointer) {
    rightPointer = rightPointer.next;
    n = n - 1;
  }
  while (rightPointer) {
    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;
  }
  leftPointer.next = leftPointer.next.next;
  return dummyNode.next;
};
