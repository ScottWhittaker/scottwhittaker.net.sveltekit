---
date: 2020-12-11
description: The difference between throttle and debounce
layout: post
slug: throttle-and-debounce
tags:
- post
title: Throttle and Debounce
---

Whenever I need to use throttle or debounce I have to remind myself of the differences. Here are a few definitions as a reminder.

## Throttle

> Creates a throttled function that only invokes func at most once per every wait milliseconds.
<cite><a href="https://lodash.com/docs/#throttle">lodash throttle</a></cite>

> Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds".
<cite><a href="https://css-tricks.com/the-difference-between-throttling-and-debouncing/#throttling-enforces-a-maximum-number-of-times-a-function-can-be-called-over-time-as-in-execute-this-function-at-most-once-every-100-milliseconds">CSS-TRICKS</a></cite>

## Debounce

> Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
<cite><a href="https://lodash.com/docs/#debounce">lodash debounce</a></cite>

> Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in "execute this function only if 100 milliseconds have passed without it being called".
<cite><a href="https://css-tricks.com/the-difference-between-throttling-and-debouncing/#debouncing-enforces-that-a-function-not-be-called-again-until-a-certain-amount-of-time-has-passed-without-it-being-called-as-in-execute-this-function-only-if-100-milliseconds-have-passed-witho">CSS-TRICKS</a></cite>

## Demo

Use left and right arrow keys to navigate and see the different behaviours of throttle and debounce.
- press left/right keys
- press and hold left/right keys

<script>
import ThrottleDebounce from '$lib/throttle-debounce/ThrottleDebounce.svelte';
</script>
<div style="margin-top: 2rem;">
    <ThrottleDebounce/>
</div>

You can also see this example and code in the [svelte repl](https://svelte.dev/repl/bf1f010a9d664d4ebdbe0c2505f2bf26?version=3.31.0).
