<script context="module">
	import { getRecentPosts } from '$lib/utils.js';

	export async function load() {
		const recentPosts = await getRecentPosts(6);
		return {
			props: {
				posts: recentPosts
			}
		};
	}
</script>

<script>
	import PostPreview from '$lib/PostPreview.svelte';
	import FullBleed from '$lib/FullBleed.svelte';
	import BorderRadiusGeneratorRow from '$lib/rows/BorderRadiusGeneratorRow.svelte';
	import VolkswagonVanagonT3Row from '$lib/rows/VolkswagonVanagonT3Row.svelte';

	export let posts;
</script>

<svelte:head>
	<title>Scott Whittaker</title>
	<meta name="description" content="Just dumping stuff out of my brain occasionally." />
</svelte:head>

<BorderRadiusGeneratorRow />

<FullBleed>
	<h2>Recent posts</h2>
	<div class="grid">
		{#each posts as post}
			<PostPreview {post} />
		{/each}
	</div>
</FullBleed>

<VolkswagonVanagonT3Row />

<style>
	@media (min-width: 768px) {
		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 2.5rem;
		}
	}
</style>
