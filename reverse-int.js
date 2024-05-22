function reverse(x) {
  let limit_one = 2 ** 31 * -1
  let limit_two = 2 ** 31 - 1
  let arrayedNumbers = JSON.stringify(x).split("")
  let reversed = []
  for (let i = arrayedNumbers.length - 1; i >= 0; i--) {
    if (arrayedNumbers[i] !== "-") reversed.push(arrayedNumbers[i])
    else {
      reversed.unshift(arrayedNumbers[i])
    }
  }
  let res = Number(reversed.join(""))
  if (res > limit_two || res < limit_one) {
    return 0
  }
  return res
}

reverse(1463847412)
1463847412
2147483641
