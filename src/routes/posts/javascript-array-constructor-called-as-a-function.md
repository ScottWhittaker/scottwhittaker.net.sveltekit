---
date: 2017-10-31
layout: post
slug: javascript-array-constructor-called-as-a-function
tags: post
title: JavaScript Array Constructor Called as a Function
---

In a [previous post](/posts/javascript-sequential-array-of-numbers/) I used `new Array(4)` to demonstrate generating a sequential list of numbers. It occurred to me that I have never actually typed `new Array()` before and have always used [array literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals) instead.

I also wondered what happens if I drop the `new` operator as in `Array(4)`? Well nothing changes as it turns out that when calling the array constructor as a function a new array object is created for you.

> When Array is called as a function rather than as a constructor, it creates and initialises a new Array object. Thus the function call Array(…) is equivalent to the object creation expression new Array(…) with the same arguments.
> <cite><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.1">Standard ECMA-262 5.1 Edition / June 2011</a></cite>

```js
[...Array(4).keys()];
// (4) [0, 1, 2, 3]

// is the same as...

[...new Array(4).keys()];
// (4) [0, 1, 2, 3]
```

I must have known this at some point but it has long been removed from the memory. Worth a quick refresh.
