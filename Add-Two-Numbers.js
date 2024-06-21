class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

var addTwoNumbers = function (l1, l2) {
  let dumbyHead = ListNode()
  let carry = 0
  let current = dumbyHead
  while (l1 !== null || l2 !== null) {
    let sum = carry
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    sum = sum % 10
    carry = sum / 10
    current.next = ListNode(sum)
    current = current.next
  }

  return dumbyHead.next
}
