---
date: 2016-07-31
layout: post
permalink: react/2016/07/31/react-context.html
slug: react-context
tags: post
title: React Context
---

This is what the docs have to say about context...

> Occasionally, you want to pass data through the component tree without having to pass the props down manually at every level. React's "context" feature lets you do this.
<cite><a href="https://facebook.github.io/react/docs/context.html">Docs</a></cite>

A good use of context would be for passing state when using [redux](http://redux.js.org/docs/introduction/) with react for example. It is not recommended for passing props and should be used sparingly.

> Using context will make your code harder to understand because it makes the data flow less clear. It is similar to using global variables to pass state through your application.
<cite><a href="https://facebook.github.io/react/docs/context.html">Docs</a></cite>

## Passing Props Manually

First lets take a look at passing props through the component tree manually...

<iframe height="300" style="width: 100%;" scrolling="no" title="React - passing props through component tree" src="https://codepen.io/ScottWhittaker/embed/bejQXY?default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ScottWhittaker/pen/bejQXY">
  React - passing props through component tree</a> by Scott Whittaker (<a href="https://codepen.io/ScottWhittaker">@ScottWhittaker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Using Context

Now take a look at the same thing but this time using `context`...

<iframe height="300" style="width: 100%;" scrolling="no" title="React - passing info via context" src="https://codepen.io/ScottWhittaker/embed/bejONa?default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ScottWhittaker/pen/bejONa">
  React - passing info via context</a> by Scott Whittaker (<a href="https://codepen.io/ScottWhittaker">@ScottWhittaker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Note that the example above is just for demonstration purposes and is not the recommended approach when simply passing props.

> Do not use context to pass your model data through components. Threading your data through the tree explicitly is much easier to understand. Using context makes your components more coupled and less reusable, because they behave differently depending on where they're rendered.
<cite><a href="https://facebook.github.io/react/docs/context.html#when-not-to-use-context">When not to use context</a></cite>


