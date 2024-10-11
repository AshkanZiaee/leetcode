class Stack {
  #list = new Map()
  #maxSize = null

  constructor(maxSize) {
    this.maxSize = Number(maxSize) || null
  }
  get size() {
    return this.#list.size
  }

  push(item) {
    this.#list.set(this.size, item)
  }

  pop() {
    if (this.size) {
      const lastItem = this.#list.get(this.size - 1)

      this.#list.delete(this.size - 1)
      return lastItem
    }
  }

  print() {
    console.log(this.#list.values)
  }
}
