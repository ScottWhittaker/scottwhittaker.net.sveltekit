<script context="module">
    export async function load() {
        const posts = import.meta.globEager('./*.md');
        const postsList = Object.values(posts);
        const postsMeta = postsList.map(post => post.metadata);
        const sortedPosts = postsMeta.sort((a, b) => new Date(b.date) - new Date(a.date));
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
    <meta name="description" content="A list of posts">
</svelte:head>

{#each posts as post}
    <PostPreview post={post} />
{/each}


