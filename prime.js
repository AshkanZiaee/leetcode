function isPrime(n) {
  if (n < 2) return false;
  for (let i = 0; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
