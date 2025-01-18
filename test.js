// Array.prototype.myMap = function (callback) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(callback(this[i], i, this));
//   }
//   return output;
// };

// Array.prototype.myFilter = function (callback) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       output.push(this[i]);
//     }
//   }
//   return output;
// };

// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     if (i === 0 && initialValue === undefined) {
//       accumulator = this[i];
//       continue;
//     }
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };

// const numbers = [1, 2, 3, 4];
// console.log(
//   numbers.myMap((value, i, numbers) => {
//     return value * i;
//   }),
// );

// console.log(
//   numbers.myFilter((value, i, numbers) => {
//     if (value * 2 < 5) return value;
//   }),
// );

// console.log(
//   numbers.myReduce((accumulator, value, i, numbers) => {
//     return accumulator + value;
//   }, 3),
// );

// function debounce(callback, delay, immediate = false) {
//   let timerID;
//   return function (...args) {
//     clearTimeout(timerID);

//     if (timerID == null && immediate) {
//       callback.apply(this, args);
//     }

//     timerID = setTimeout(() => {
//       if (!immediate) {
//         callback.apply(this, args);
//       }
//       timerID = null;
//     }, delay);
//   };
// }

// function logAshkan(some, stuff) {
//   console.log("ashkan");
// }

// const debouncedLogAshkan = debounce(logAshkan, 2000, true);

// debouncedLogAshkan("", "");

// function curry(callback) {
//   const curreidFunc = (...args) => {
//     if (args.length === 0) {
//       return callback();
//     }
//     return (...otherArgs) => {
//       if (otherArgs.length === 0) {
//         return callback(...args);
//       }
//       return curreidFunc(...args, ...otherArgs);
//     };
//   };
//   return curreidFunc;
// }

// const addStuff = (a, b, c) => {
//   return a + b + c;
// };

// const curriedAddStuff = curry(addStuff);
// console.log(curriedAddStuff());
// console.log(curriedAddStuff(1)(2)());

// console.log(typeof 2);

// console.log(1 === Number.is1);

// const obj1 = { 8: "a", 2: "b" };
// const obj2 = { 2: "b" };

// console.log("a", typeof null);

// function deepEquals(valueOne, valueTwo) {
//   if (valueOne === valueTwo) return true;

//   if (Number.isNaN(valueOne) && Number.isNaN(valueTwo)) return true;

//   if (valueOne === null || valueTwo === null) return valueOne === valueTwo;
//   if (valueOne === undefined || valueTwo === undefined)
//     return valueOne === valueTwo;

//   if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
//     if (valueOne.length !== valueTwo.length) return false;
//     for (let i = 0; i < valueOne.length; i++) {
//       if (!deepEquals(valueOne[i], valueTwo[i])) return false;
//     }
//     return true;
//   }
//   if (typeof valueOne === "object" && typeof valueTwo === "object") {
//     const valueOneKeys = Object.keys(valueOne);
//     const valueTwoKeys = Object.keys(valueTwo);
//     if (valueOneKeys.length !== valueTwoKeys.length) return false;
//     for (const key of valueOneKeys) {
//       if (!valueTwo.hasOwnProperty(key)) return false;
//       if (!deepEquals(valueOne[key], valueTwo[key])) return false;
//     }
//     return true;
//   }

//   return false;
// }
// console.log(deepEquals(1, 1)); // true
// console.log(deepEquals(1, "1")); // false
// console.log(deepEquals(NaN, NaN)); // true
// console.log(deepEquals(null, null)); // true
// console.log(deepEquals(undefined, undefined)); // true
// console.log(deepEquals([1, 2, 3], [1, 2, 3])); // true
// console.log(deepEquals([1, 2, 3], [1, 2, 4])); // false
// console.log(deepEquals({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
// console.log(deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })); // true
// console.log(deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 4 } })); // false
// console.log(deepEquals({ a: undefined }, { b: 1 })); // false

// function flatten(value) {
//   if (Array.isArray(value)) {
//     const newArray = [];
//     for (let i = 0; i < value.length; i++) {
//       if (Array.isArray(value[i])) {
//         newArray.push(...flatten(value[i]));
//       } else {
//         newArray.push(value[i]);
//       }
//     }
//   }
//   return newArray;

//   return value;
// }

const SYMBOLS_API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/stock-symbols";
const MARKET_CAPS_API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/stock-market-caps";
const PRICES_API_BASE_URL = "https://api.frontendexpert.io/api/fe/stock-prices";

async function trendingStocks(n) {
  const [symbolsResponse, marketcapsResponse] = await Promise.all([
    fetch(SYMBOLS_API_BASE_URL),
    fetch(MARKET_CAPS_API_BASE_URL),
  ]);
  const [symbolsObj, marketcapsObj] = await Promise.all([
    symbolsResponse.json(),
    marketcapsResponse.json(),
  ]);
  const requestedSymbols = marketcapsObj
    .sort((stockA, stockB) => {
      return stockB["market-cap"] - stockA["market-cap"];
    })
    .slice(0, n)
    .map((marketcapsObj) => marketcapsObj.symbol);
  const pricesURL = new URL(PRICES_API_BASE_URL);
  pricesURL.searchParams.set("symbols", JSON.stringify(requestedSymbols));
  const priceResponse = await fetch(pricesURL);
  const pricesObj = await priceResponse.json();
  const symbolMarketcapPriceObj = {};
  symbolsObj.forEach(({ symbol, name }) => {
    symbolMarketcapPriceObj[symbol] = { name };
  });
  marketcapsObj.forEach(({ symbol, "market-cap": marketCap }) => {
    symbolMarketcapPriceObj[symbol] = { marketCap };
  });
  return symbolMarketcapPriceObj;
}

trendingStocks(2);
