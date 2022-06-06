<script>
	import PostPreview from '$lib/PostPreview.svelte';
	import FullBleed from '$lib/FullBleed.svelte';

	export let sortedPosts;
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content="A list of posts" />
</svelte:head>

<FullBleed>
	<h2>Posts</h2>
	{#each sortedPosts as post}
		{#if post}
		<PostPreview {post} />
			{/if}
	{/each}
</FullBleed>
