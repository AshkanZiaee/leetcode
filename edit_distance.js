var minDistance = function (word1, word2) {
  a = word1.length;
  b = word2.length;
  const dp = Array(a + 1)
    .fill(0)
    .map(() => Array(a + 1).fill(0));

  for (let i = 0; i <= a; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= b; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[a][b];
};
