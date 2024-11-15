function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
}

console.log(linearSearch([85, 31, 12, 45, 6], 31));
