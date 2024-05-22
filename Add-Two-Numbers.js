class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0)
  let current = dummyHead
  let carry = 0
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

    carry = Math.floor(sum / 10)
    sum = sum % 10
    current.next = new ListNode(sum)
    current = current.next
  }
  if (carry > 0) current.next = new ListNode(carry)
  return dummyHead.next
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
