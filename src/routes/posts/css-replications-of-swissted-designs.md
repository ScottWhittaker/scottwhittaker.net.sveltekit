---
date: 2020-04-02
description: Replicating some designs from https://www.swissted.com/ with html and css
layout: post
slug: css-replications-of-swissted-designs
tags:
- post
- css
- swissted
title: Swissted replications using HTML and CSS
---

A few replications of the amazing designs at [swissted](https://www.swissted.com/) using HTML and CSS only. You can view the [collection on Codepen](https://codepen.io/collection/DrYaGV). A few examples...

<script>
    import Blondie from '$lib/swissted/Blondie.svelte';    
    import Pixies from '$lib/swissted/Pixies.svelte';
    import TalkingHeads from '$lib/swissted/TalkingHeads.svelte';
</script>

<div style="display: flex; flex-direction: column; gap: 32px; align-items: center; margin-top: 64px;">
    <Blondie/>
    <TalkingHeads/>
    <Pixies/>
</div>
