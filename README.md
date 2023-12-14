# @robertsspaceindustries/simplecache

Simple caching of values

## Usage

```js
// Try this out using `npm run test`

import Cache from "@robertsspaceindustries/simplecache";

const cache = new Cache(10_000, function (number) {
  return 2 + number;
});

await cache.getValue(1); // Expected value: 3

setTimeout(async function () {
  await cache.getValue(2); // Expected value: 3, cache hasn't expired yet

  setTimeout(async function () {
    await cache.getValue(2); // Expected value: 4
  }, 2_500);
}, 7_500);
```
