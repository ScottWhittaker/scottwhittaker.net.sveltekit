---
date: 2020-06-07
description: Discovering Montague Projects art, design and illustration
layout: post
slug: discovering-montague-projects
tags:
  - post
  - css
  - design
title: Discovering Montague Projects
---

I found these amazing [designs by Julian Montague](http://www.montagueprojects.com/) so started doing a few reproductions in html and css. I particularly like the [1970's car series](http://www.montagueprojects.com/#/print-series-1970s-cars/).

<script>
    import Landrover from '$lib/montague-projects/Landrover.svelte';    
    import VolkswagonVanagonT3 from '$lib/montague-projects/VolkswagonVanagonT3.svelte';
</script>

<div style="display: flex; flex-direction: column; gap: 4rem; margin-top: 4rem; overflow: auto;">
    <Landrover/>
    <VolkswagonVanagonT3/>
</div>
