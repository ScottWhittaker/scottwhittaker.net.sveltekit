---
date:   2019-03-03
description: A more declarative way to filter undefined values from an array in JavaScript using the identity function
layout: post
slug: discovering-the-identity-function
tags: post
title:  Discovering the identity function
---

I fixed a bug recently: `TypeError: Cannot read property 'id' of undefined`. This one was simple enough, I had created an array which had `undefined` values in it and later when iterating that array the expected value was not present, hence the error.

## The Issue

Here is a contrived example of the issue; there are 2 arrays, `data1` and `data2`. We want to create a new array by iterating `data1` and finding objects in `data2` that have the same `id`.

```js
const data1 = [{id: '1'}, {id: '2'}, {id: '76'}, {id: '378'}, {id: '879'}]
const data2 = [{id: '2'}, {id: '378'}]

// map returns an array with the same length as the array you are mapping over
const result = data1.map(function(item1) {
  // find will return undefined if the test is not satisfied
  return data2.find(function(item2) {
     return item1.id === item2.id;
  });
});
```

Or the ES6 approach...

```js
const result = data1.map(item1 => data2.find(item2 => item2.id === item1.id));
```

The resulting array contains 3 `undefined` entries and 2 objects, those objects whose `id` values matched. The reason we have `undefined` values in the array is firstly, when we [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over an array it will always return a new array with same length as the array we are mapping over, hence `data1.length` is 5 and `result.length` is 5. Additionally we pass a `function` to `map` which uses [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) to determine if each item in the `data1` array exists in the `data2` array. `find` returns the value if it matched, otherwise it returns `undefined`.

```js
[ undefined, { id: '2' }, undefined, { id: '378' }, undefined ];
```

Later in the code we iterate the result expecting each item in the array to be an object with an `id` property. The first value in the array is `undefined` and an error is thrown.

```js
result.forEach(item => console.log(item.id)); // TypeError: Cannot read property 'id' of undefined
```

To fix the bug we need to filter out the `undefined` values in the array:

```js
const result =
  data1
    .map(item1 => data2.find(item2 => item2.id === item1.id))
    .filter(value => value !== undefined);
```

Filtering out `undefined` values from the array fixes the bug and we can move on.

```js
console.log(result); // [ { id: '2' }, { id: '378' } ]
```

## A more functional approach

There is nothing at all wrong with the above fix but I had a niggling feeling that this common filtering approach could be handled in a more declarative way. Eventually I found the answer in the book [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md/#one-on-one).

It turns out that in functional programming there is a common base utility function called `identity` which returns the argument that it receives.

> Because identity(..) simply returns the value passed to it, JS coerces each value into either true or false, and that determines whether to keep or exclude each value in the final array.
<cite><a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md/#one-on-one">Functional-Light JavaScript</a></cite>

For example the [lodash](https://lodash.com/docs/#identity) library has an identity function.

```js
function identity(value) {
  return value;
}
```

We can use the `identity` function as follows to filter the results.

```js
const result =
  data1
    .map(item1 => data2.find(item2 => item2.id === item1.id))
    .filter(identity);
```

This yields the same results but the code is more declarative.

```js
console.log(result); // [ { id: '2' }, { id: '378' } ]
```

It turns out that we can also use the built-in [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) function to achieve the same thing.

> Tip: Another unary function that can be used as the predicate in the previous example is JS's built-in Boolean(..) function, which explicitly coerces a value to true or false.
<cite><a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md/#one-on-one">Functional-Light JavaScript</a></cite>

```js
const result =
  data1
    .map(item1 => data2.find(item2 => item2.id === item1.id))
    .filter(Boolean);

console.log(result); // [ { id: '2' }, { id: '378' } ]
```
