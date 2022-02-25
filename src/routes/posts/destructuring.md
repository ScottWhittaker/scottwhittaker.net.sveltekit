---
date: 2016-08-30
layout: post
permalink: es6/2016/08/30/destructuring.html
slug: destructuring
tags: post
title: Destructuring
---

> The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.
> <cite><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">MDN</a></cite>

### Object Destructuring

What everyday problem does this address? A common thing to want to do is extract some data from an object, for example, a name and manufacturer from a starship object (I am always dealing with starships).

Given the following object (an example from [SWAPI](https://swapi.co/)) we would normally do something like this...

```js
const starship = {
	name: 'Millennium Falcon',
	model: 'YT-1300 light freighter',
	manufacturer: 'Corellian Engineering Corporation',
	cost_in_credits: '100000',
	length: '34.37',
	max_atmosphering_speed: '1050',
	crew: '4',
	passengers: '6',
	cargo_capacity: '100000',
	consumables: '2 months',
	hyperdrive_rating: '0.5',
	MGLT: '75',
	starship_class: 'Light freighter'
};

// old skool
const starshipName = starship.name;
const starshipManufacturer = starship.manufacturer;
```

Nothing wrong with that but destructuring provides a different and more convenient way to achieve this...

```js
// new skool
const { name, manufacturer } = starship;
console.log(name, manufacturer); // Millennium Falcon, Corellian Engineering Corporation
```

Note the curly braces in the statement, this is the destructuring syntax...

`const { name, manufacturer } = starship;`

This creates 2 variables called `name` and `manufacturer` and assigns the values of `starship.name` and `starship.manufacturer` respectively. As long as the name of the variable is the same name as the object key the value will be assigned.

For cases where you don't want to use the same name as an object key, for example you may not want your variable names to include underscores, you can assign to a different name with the following syntax...

```js
// assign different names
const { name: ship, hyperdrive_rating: hyperdriveRating } = starship;
console.log(ship, hyperdriveRating); // Millennium Falcon 0.5
```

#### Deeply Nested Objects

```js
const data = {
	id: '1574083',
	username: 'joebloggs',
	counts: {
		media: 1320,
		follows: 420,
		followed_by: 3410
	}
};

const { follows, followed_by: followedBy } = data.counts;
console.log(follows, followedBy); // 420 3410
```

#### Setting Default Values

```js
const config = {
	width: 100,
	height: 60
};

const { width = 80, height = 40, color = 'red' } = {};
console.log(width, height, color); // 80, 40, red

const { width: w = 80, height: h = 40, color: c = 'red' } = config;
console.log(w, h, c); // 100, 60, red
```

## Resources

- [You Don't Know JS: ES6 & Beyond: Destructuring](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch2.md#destructuring)
- [MDN - Destructuring assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Exploring ES6 - Destructuring](http://exploringjs.com/es6/ch_destructuring.html)
- [ES6 In Depth: Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
