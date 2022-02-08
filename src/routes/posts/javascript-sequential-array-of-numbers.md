---
date: 2017-10-30
layout: post
slug: javascript-sequential-array-of-numbers
tags: post
title:  Sequential array of numbers in JavaScript
---

One of those quick tests required that I had an array of sequential numbers but I could not be bothered to either type out the array, create a loop to fill it or install a library to handle it for me, for example the [`_range`](https://lodash.com/docs/#range) function from lodash. I just wanted a quick one liner and thought there must be an easier way with es6. It turns out to be nice and easy, see [Filling with ascending numbers](http://exploringjs.com/es6/ch_arrays.html#_filling-with-ascending-numbers).

For example...

```js
var iterator = new Array(4).keys();
// Array Iterator {}

[...iterator] // expand values into array
// [0, 1, 2, 3]
```

This works because [`Array.prototype.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) returns a new `Array Iterator` object and the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) allows an iterable object to be expanded into an array.

As a handy one liner...

```js
var numbers = [...new Array(4).keys()];
// [0, 1, 2, 3]
```

Note that you can also use [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) to achieve the same result as it returns a new array from an iterable object.

```js
var numbers = Array.from(new Array(4).keys())
// [0, 1, 2, 3]
```


## es2015

Just out of interest, the following is the [babel generated](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=G4QwTgBAdgrgtgIwKZgM4QgXggbQHQFRIDuEAgmGCAJ4AUALAJR4DWS1qtjAukA&debug=false&circleciRepo=&evaluate=true&lineWrap=true&presets=es2015%2Cstage-2&targets=&version=6.26.0) es2015 code...

```js
"use strict";

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

var numbers = [].concat(_toConsumableArray(new Array(4).keys()));
```
