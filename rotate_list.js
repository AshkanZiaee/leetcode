var rotateRight = function (head, k) {
  if (head === null) return head;
  let length = 1;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }
  tail.next = head;
  let count = length - (k % length);

  while (count > 0) {
    head = head.next;
    tail = tail.next;
    count--;
  }
  tail.next = null;
  return head;
};
length = 5;
k = 1;
let count = length - (k % length);
console.log(count);
