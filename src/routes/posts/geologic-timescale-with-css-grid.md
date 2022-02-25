---
date: 2020-09-02
description: Using CSS Grid to display the Geologic Timescale
layout: post
slug: geologic-timescale-with-css-grid
tags:
  - post
  - css-grid
title: Geologic Timescale with CSS Grid
---

I was looking for an excuse to learn a little [CSS grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) and thought the [Geologic Timescale](https://en.wikipedia.org/wiki/Geologic_time_scale) might be an interesting challenge.

Note that this was purely a learning exercise and as a result it is not at all accessible in terms of describing the data hierarchically. We can determine the hierarchy visually but a screen reader would not convey this information to a user; that is an exercise for another day.

The solution is available on [CodePen](https://codepen.io/ScottWhittaker/pen/GRZvPYN) should you wish to see my approach.

<p class="info">The colour palettes and data for geological time were <a href="https://bitbucket.org/chhei/gmt-cpts/src/master/">found here</a>.</p>

<script>
    import GeologicTimescale from '$lib/geologic-timescale/GeologicTimescale.svelte';
</script>

<GeologicTimescale/>
