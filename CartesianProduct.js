function CartesianProduct(arrOne, arrTwo) {
  let res = []
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      res.push([arrOne[i], arrTwo[j]])
    }
  }
  return res
}

console.log(CartesianProduct([1, 3], [4, 6, 9]))

class Node {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : val
  }
}
