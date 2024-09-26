var reverseBetween = function (head, left, right) {
  if (!head) return null;
  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }
  let start = prev.next;
  let then = start.next;
  for (let i = 0; i < right - left; i++) {
    start.next = then.next;
    then.next = prev.next;
    prev.next = then;
    then = start.next;
  }

  return dummy.next;
};
