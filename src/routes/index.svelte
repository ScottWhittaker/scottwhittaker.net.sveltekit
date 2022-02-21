<script context="module">
    export async function load() {
        const posts = import.meta.globEager('./posts/*.md');
        const postsList = Object.values(posts);
        const postsMeta = postsList.map(post => post.metadata);
        const sortedPosts = postsMeta.sort((a, b) => new Date(b.date) - new Date(a.date));
        const recentPosts = sortedPosts.slice(0, 6);
        return {
            props: {
                posts: recentPosts
            }
        };
    }
</script>

<script>
    import PostPreviewTile from '$lib/PostPreviewTile.svelte';

    export let posts;
</script>

<svelte:head>
    <title>Scott Whittaker</title>
    <meta name="description" content="Just dumping stuff of my brain occasionally.">
</svelte:head>



<div class="g-full-bleed">
<div class="g-wrapper">
    <h2>Recent posts</h2>
    <div class="wrapper">
{#each posts as post}
    <PostPreviewTile post={post} />
{/each}
    </div>
</div>
</div>

<style>
    .g-full-bleed {
        padding: 4rem 0;
        background: var(--grey-lightest);
    }

    .wrapper {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 16px;
        margin-top: 2rem;
    }

    h2 {
        margin: 0;
    }

    @media (min-width: 640px) {
        .wrapper {
            grid-template-columns: fit-content(8ch) fit-content(8ch) 1fr;
        }
    }
</style>
