<script context="module">
	import { getSortedPosts } from '$lib/utils';

	export async function load() {
		const sortedPosts = await getSortedPosts();
		return {
			props: {
				posts: sortedPosts
			}
		};
	}
</script>

<script>
	import PostPreview from '$lib/PostPreview.svelte';

	export let posts;
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content="A list of posts" />
</svelte:head>

<h2>Posts</h2>
{#each posts as post}
	<PostPreview {post} />
{/each}
