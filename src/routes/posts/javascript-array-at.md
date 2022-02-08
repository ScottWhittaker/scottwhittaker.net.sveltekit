---
date:   2021-03-11
description: A look at the Javascript Array.prototype.at() method that allows for negative indexing
layout: post
slug: javascript-array-at
tags:
- post
- javascript
title: JavaScript Array.prototype.at()
---

Browsing the MDN docs to look up something related to arrays I noticed the experimental [Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) method so I thought I would take a look.

> The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
<cite>[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)</cite>

<p class="info">Try it out on <a href="https://codesandbox.io/s/array-at-method-b1p2h">CodeSandbox</a></p>

This is an alternative to using square bracket notation to access items in an array.

As an example we will use the following array and have a variable `idx` which has value of 2.

```js
const list = ["one", "two", "threee", "four", "five"];

let idx = 2;
```

Using square bracket notation we access the value as follows...

```js
const item = list[idx]; // three
```

Using the `at` method...

```js
const item = list.at(idx); // three
```

The advantage of using the `at` method is when using negative indexes. Typically when we want to get the last item in an array we minus one from the array length.

```js
const lastItem = list[list.length - 1]; // five
```

The `at` method is more concise. Pass `-1` as the argument and it returns the last item in the array.

```js
const lastItem = list.at(-1); // five
```

To get the penultimate item pass `-2` as the argument and so on.

```js
const lastItem = list.at(-2); // four
```

I was not sure why this would be added to the language other than for convenience (which is great) but apparently it has been a long held request as noted below.

> For many years, programmers have asked for the ability to do "negative indexing" of JS Arrays, like you can do with Python. That is, asking for the ability to write arr[-1] instead of arr[arr.length-1], where negative numbers count backwards from the last element.
<cite>[tc39 Rationale](https://github.com/tc39/proposal-relative-indexing-method#rationale)</cite>

