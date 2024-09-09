var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let currentPrice of prices) {
    if (currentPrice < minPrice) minPrice = currentPrice;
    else if (currentPrice - minPrice > maxProfit) {
      maxProfit = currentPrice - minPrice;
    }
  }
  return maxProfit;
};
