function staircase(n) {
  const numberOfWays = [1, 2]
  for (let i = 2; i <= n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2]
  }
  return numberOfWays[n - 1]
}

console.log(staircase(1))
console.log(staircase(2))
console.log(staircase(3))
console.log(staircase(5))
console.log(staircase(6))

const obj = { name: "bruce", age: 25, height: 177 }
console.log(Object.keys(obj))
