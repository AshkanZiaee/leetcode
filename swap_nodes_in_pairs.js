class ListNode {
  constructor(val, next) {
    this.val = val ? val : undefined;
    this.next = next ? next : null;
  }
}
let i = 2;
let head = new ListNode(1);
let current = head;
while (i < 5) {
  let node = new ListNode(i);
  current.next = node;
  current = current.next;
  i++;
}

var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  const firstNode = head;
  const secondNode = head.next;

  const rest = swapPairs(secondNode.next);

  secondNode.next = firstNode;
  firstNode.next = rest;

  return secondNode;
};

swapPairs(head);


console.log("sdusbs".sort((a,b) => a - b))