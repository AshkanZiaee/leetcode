var numDecodings = function (s) {
  if (!s || s[0] === "0") return 0;

  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;
  for (let i = 2; i <= n; i++) {
    console.log(s[i - 1]);
    if (s[i - 1] !== "0") {
      dp[i] = dp[i] + dp[i - 1];
    }

    const twoDigits = parseInt(s.substring(i - 2, i), 10);
    console.log(twoDigits);
    if (twoDigits >= 10 && twoDigits <= 26) {
      console.log("before", dp);
      dp[i] = dp[i] + dp[i - 2];
      console.log("after", dp);
    }
  }
  return dp[n];
};

numDecodings("226");
