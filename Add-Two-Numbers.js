
}
var addTwoNumbers = function (l1, l2) {
  let dumbyNode = new ListNode(0)
  let current = dumbyNode
    let carry = 0
    while (l1 !== null || l2 !==null) {
      let total = carry
      if (l1) {
        total += l1.val
        l1 = l1.next
      }
      if (l2) {
        total += l2.val
        l2 = l2.next
      }
      carry += Math.floor(total / 10)
      total = total % 10
      current.next = new ListNode(total)
      current = current.next
    }
    if (carry >= 1) current.next =new ListNode(carry)
    return dumbyNode.next
}


