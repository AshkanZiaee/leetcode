class Node {
  constructor(value, next) {
    this.value = value ? value : undefined;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size ? false : true;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}

const list = new LinkedList();
console.log("is it empty?", list.isEmpty());
console.log("size of the list", list.getSize());
console.log("prepend", list.prepend(8));
console.log("size of the list", list.getSize());
