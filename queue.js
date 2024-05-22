class Queue {
  #list = []
  constructor(val) {
    this.#list.push(val)
  }

  enqueue(val) {
    this.#list.push(val)
  }
  dequeue() {
    return this.#list.shift(this.#list.length - 1)
  }

  isEmpty() {
    return Boolean(this.#list.length - 1)
  }
  peak() {
    return this.#list[this.#list.length - 1]
  }
  print() {
    console.log(Array.from(this.#list))
  }
}

let myQueue = new Queue(13)

myQueue.enqueue(31)
myQueue.enqueue(88)
console.log(myQueue.dequeue())
myQueue.print()

console.log(myQueue.peak())
