var deleteDuplicates = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let current = head;
  while (current !== null) {
    if (current.next !== null && current.val === current.next.val) {
      while (current.next !== null && current.val === current.next.val) {
        current = current.next;
      }
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return dummy.next;
};
