---
date: 2016-07-30
layout: post
permalink: react/2016/07/30/react-stateless-components.html
slug: react-stateless-components
tags: post
title: React Stateless Components
---

An initial look at [React](https://facebook.github.io/react/) stateless components. The docs call them [Stateless Functions](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) so it looks like I am wrong already! The terms do appear to be interchangeable though.

This is what the docs have to say about stateless functions...

> This simplified component API is intended for components that are pure functions of their props. These components must not retain internal state, do not have backing instances, and do not have the component lifecycle methods. They are pure functional transforms of their input, with zero boilerplate. However, you may still specify .propTypes and .defaultProps by setting them as properties on the function, just as you would set them on an ES6 class.
> <cite><a href="https://facebook.github.io/react/docs/reusable-components.html#stateless-functions">React Docs</a></cite>

## Examples

<iframe height="300" style="width: 100%;" scrolling="no" title="React Stateless Components" src="https://codepen.io/ScottWhittaker/embed/VjBEMB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ScottWhittaker/pen/VjBEMB">
  React Stateless Components</a> by Scott Whittaker (<a href="https://codepen.io/ScottWhittaker">@ScottWhittaker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
