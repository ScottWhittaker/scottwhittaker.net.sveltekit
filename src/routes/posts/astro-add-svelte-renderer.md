---
date: 2021-11-24
description: Adding the svelte renderer to astro
slug: astro-add-svelte-renderer
tags: post
title: Adding the Svelte renderer to Astro
---

Assuming you have [astro](https://docs.astro.build/quick-start/) installed already and you want to use [Svelte](https://svelte.dev/) components on your site, then you need to install the Svelte renderer and add it to the config.

[Astro renderers](https://github.com/withastro/astro/tree/main/packages/renderers)

## Install the Svelte renderer

```bash
npm install @astrojs/renderer-svelte
```

## Add the the Svelte renderer to config

Add the renderer in `astro.config.mjs`. 

```javascript
export default ({
  renderers: ['@astrojs/renderer-preact', '@astrojs/renderer-svelte'],
});
```

