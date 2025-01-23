class ListNode {
  constructor(val, next) {
    this.val = val ? val : undefined;
    this.next = next ? next : null;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    const node = new ListNode(digit);
    current.next = node;
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    const node = new ListNode(carry);
    current.next = node;
  }

  return dummyHead.next;
};
