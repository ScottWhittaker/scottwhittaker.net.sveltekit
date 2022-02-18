---
date: 2017-04-18
layout: post
slug: imperative-vs-declarative
tags: post
title:  Imperative vs Declarative
---

What do these terms mean? They are often cited when reading introductions to various frameworks or tutorials, here is a brief overview.

### Imperative (how)

Tell the computer how to do something, we have to explicitly code all the details.

> In computer science, imperative programming is a programming paradigm that uses statements that change a program's state. In much the same way that the imperative mood in natural languages expresses commands, an imperative program consists of commands for the computer to perform. Imperative programming focuses on describing how a program operates. <cite><a href="https://en.wikipedia.org/wiki/Imperative_programming">wikipedia</a></cite>

A simple example, an imperative function to sum a list of numbers...

```js
function imperativeSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
}

imperativeSum([1,2,3,4]); // 10
```

### Declarative (what)

Here we are concerned with what we want to do, the details (the imperative stuff) are abstracted away.

> In computer science, declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow. <cite> [wikipedia](https://en.wikipedia.org/wiki/Declarative_programming)</cite>

```js
function declarativeSum(numbers) {
  return numbers.reduce((accumulator, value) => accumulator + value);
}

declarativeSum([1,2,3,4]); // 10
```

### Benefits

- Reduce bugs
- Reduce side effects
- Minimise immutability
- More readable/cleaner code

### Resources

- [Imperative vs Declarative Programming](https://tylermcginnis.com/imperative-vs-declarative-programming/)
