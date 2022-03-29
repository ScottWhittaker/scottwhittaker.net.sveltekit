---
date: 2022-03-29
description: When using logical AND, React can display 0 in the UI in certain circumstances and this might not be what you expect. It is however the correct behaviour and I was not aware why.
layout: post
slug: extraneous-zero-character-displayed-by-react
tags:
- post
- javascript
- react
title: React displays 0 when using logical AND (&&)
---

In the day job I had a bug where a `0` character was being rendered on screen. I was not sure why this happened and had never seen it before. A contrived example shows the issue.

Firstly, we have a `<Thing>` component, all it does is render a title in an `<h2>`.

```js
export default function Thing({ title }) {
  return <h2>{title}</h2>;
}
```

Next we have a parent component that will render a list of `<Thing>` components. 

```js
import Thing from "./Thing";

export default function App() {
  const things = [];

  return (
    <div className="App">
      <h1>Things</h1>
      {things.length && things.map((title) => <Thing title={title} />)}
    </div>
  );
}
```

Note the line where we render the list of `<Thing>` components. It uses a logical AND (&&), the operand on the left side is `things.length`. We can see above that the `things` array is empty, thus `things.length` will evaluate to `0`.  

```js
{things.length && things.map((title) => <Thing title={title} />)}
```

As result, in the UI, we see the 0 gets rendered.

<p style="display: flex; flex-direction: column; align-items: center;" class="info">
<strong>Things</strong>
0
</p>

The logical AND returns as soon as it finds a falsy value. Operands are read left to right, so in this case `things.length` is evaluated to `0`, which is `falsy`, and the logical AND returns the value of that operand which is `0`.

> More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
> <cite><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">MDN Logical AND</a></cite>

The reason the `0` is rendered is due to the fact react will render a value whose type is `number`. This makes sense, we want to render numbers in the UI.

In order to fix this we could coerce the value to a boolean or use a ternary operator.

### Coerce to boolean

```js
{ Boolean(things.length) && things.map((title) => <Thing title={title} />) }

// or...

{ !!things.length && things.map((title) => <Thing title={title} />) }
```

### Use the ternary operator

```js
{things.length ? null : things.map((title) => <Thing title={title} />)}
```

## Conclusion

The reason this was not familiar to me was that I would not have coded the example in the same way. Of course this is personal preference but I like to fail/bail early. I prefer this approach as it means we can avoid issues like the one above, also it avoids using the ternary operator approach, which I find hard to read, particularly when it is combined with jsx.

```js
  if (!things.length) return null;

  return (
    <div className="App">
      <h1>Things</h1>
      {things.map((title) => (
        <Thing title={title} />
      ))}
    </div>
  );
```





