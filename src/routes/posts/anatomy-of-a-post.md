---
date: 2022-01-01
description: An example post using markdown and mdsvex
slug: anatomy-of-a-post
tags: post
title: Anatomy of a post
---

## {title}

For want of a better title, just some examples of things in a markdown file used for a post.

### Code blocks

`a11y-light` theme for JavaScript, CSS, and HTML.

```javascript
<script>
    export let date;
    const formattedDate = new Date(date).toDateString();
</script>

<time datetime={date} class="post__date">{formattedDate}</time>
```

### Call outs

<p class="info">For your information.</p>

```html
<p class="info">For your information.</p>
```

<p class="warn">For your <strong>attention</strong>.</p>

```html
<p class="warn">For your attention.</p>
```

### Tables

Some lovely tabular data describing the `HTMLMediaElement.readyState`, copied from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState).

<div style="overflow-x: auto;">

Constant|Value|Description
|:-------|:-----:|:-----------
|HAVE_NOTHING       | 0	| No information is available about the media resource.
|HAVE_METADATA	    | 1	| Enough of the media resource has been retrieved that the metadata attributes are initialized. Seeking will no longer raise an exception.
|HAVE_CURRENT_DATA	| 2	| Data is available for the current playback position, but not enough to actually play more than one frame.
|HAVE_FUTURE_DATA	| 3	| Data for the current playback position as well as for at least a little bit of time into the future is available (in other words, at least two frames of video, for example).
|HAVE_ENOUGH_DATA	| 4	| Enough data is available—and the download rate is high enough—that the media can be played through to the end without interruption.
</div>

<script>
    import GeologicTimescale from '$lib/geologic-timescale/GeologicTimescale.svelte';
</script>

<GeologicTimescale/>

