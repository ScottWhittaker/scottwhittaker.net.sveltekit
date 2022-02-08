---
date: 2022-02-01
description: How to wrap an mdsvex document with a layout component allowing you to do all manner of things. 
layout: post
slug: wrap-an-mdsvex-document-to-dynamically-add-page-titles
tags: post
title:  Wrap an mdsvex document to dynamically add page titles
---

## {title}

When putting this starter template together I wanted to dynamically update the document page title for each post so that the title would be reflected in the browser tab.

I already knew about the special element [`<svelte:head>`](https://svelte.dev/tutorial/svelte-head) which can be used to update any element in the `<head>` of the document but I did not want to add this to every `.md` file in the `posts` directory. 

```html
<svelte:head>
    <title>{title}</title>
</svelte:head>
```

It turns out that [mdsvex](https://mdsvex.pngwn.io/) provides a very nice solution for this in the form of [layouts](https://mdsvex.pngwn.io/docs#layouts). You can wrap your mdsvex documents in a layout and add any common functionality there. The first step is to add the path to your layout in `mdsvex.config.js`

```js
const config = {
    // ...
    layout: "./src/routes/posts/PostLayout.svelte"
};

export default config;
```

Now create the layout file, I chose to co-locate it with the posts at `./src/routes/posts/PostLayout.svelte`. The layout receives all frontmatter as props for you to use. In this example we require the `title` to use in `<svelte:head>` in order to update the documents title dynamically.

Make sure to include a `<slot>` so the content can be rendered.

```html
<script>
    export let title;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<slot></slot>
```

That is all that is required to update the document title when each of our posts are rendered. We can of course add other [metadata in the head](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) here also, such as the description etc.  
