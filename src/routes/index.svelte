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

	export let posts;
</script>

<svelte:head>
	<title>Scott Whittaker</title>
	<meta name="description" content="Just dumping stuff of my brain occasionally." />
</svelte:head>

<h2>Recent posts</h2>
<div class="grid">
	{#each posts as post}
		<PostPreview post={post}/>
	{/each}
</div>

<style>
	@media (min-width: 768px) {
		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 2.5rem;
		}
	}
</style>
