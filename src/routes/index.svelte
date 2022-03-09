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
{#each posts as post}
	<PostPreview post={post}/>
{/each}
