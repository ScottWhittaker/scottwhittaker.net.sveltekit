<script>
	import PostDateTime from '$lib/PostDateTime.svelte';
	import FullBleed from '$lib/FullBleed.svelte';

	export let title;
	export let description = '';
	export let date;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="stylesheet" href="/ally-light.css" />
</svelte:head>

<div>
	<FullBleed>
		<PostDateTime {date} />
		<h2>{title}</h2>
		<slot />
	</FullBleed>
</div>

<style>
	div {
		padding-top: 4rem;
	}
</style>
