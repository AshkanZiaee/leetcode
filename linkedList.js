class Node {
  constructor(value, next) {
    this.value = value ? value : undefined
    this.next = next ? next : null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insert(val) {
    let newNode = Node(val)
    this.current = newNode
  }
  isEmpty() {
    return this.size ? false : true
  }

  getSize() {
    return this.size
  }
}
