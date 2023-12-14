import Cache from "./index.js";

const cache = new Cache(10_000, function (number) {
  return 2 + number;
});

console.log("1:", await cache.getValue(1)); // Expected value: 3

setTimeout(async function () {
  console.log("2:", await cache.getValue(2)); // Expected value: 3, cache hasn't expired yet

  setTimeout(async function () {
    console.log("3:", await cache.getValue(2)); // Expected value: 4
  }, 2_500);
}, 7_500);
