class ListNode {
  constructor(val, next) {
    this.val = val ? val : undefined;
    this.next = next ? next : null;
  }
}

let list1 = new ListNode(Math.floor(Math.random() * 10));
let officialList1 = list1;

let i = 0;
while (i < 10) {
  let newNode = new ListNode(Math.floor(Math.random() * 10));
  list1.next = newNode;
  list1 = list1.next;
  i++;
}
let list2 = new ListNode(Math.floor(Math.random() * 10));
let officialList2 = list2;
let j = 0;
while (j < 10) {
  let newNode = new ListNode(Math.floor(Math.random() * 10));
  list2.next = newNode;
  list2 = list2.next;
  j++;
}

var mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode();
  let current = dummyHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) {
    current.next = list1;
  } else if (list2) {
    current.next = list2;
  }
  return dummyHead.next;
};

mergeTwoLists(officialList1, officialList2);
