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
    </div>

        <div class="grid-wrapper">
            <div class="grid-content">
                <div class="grid">
                    <div></div>
                    <div>
                        <PostPreviewTile post={posts[0]} />
                    </div>
                    <div>
                        <PostPreviewTile post={posts[1]} />
                    </div>
                    <div>
                        <PostPreviewTile post={posts[2]} />
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <PostPreviewTile post={posts[3]} />
                    </div>
                    <div>
                        <PostPreviewTile post={posts[4]} />
                    </div>
                    <div>
                        <PostPreviewTile post={posts[5]} />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>


</div>

<style>
    .g-full-bleed {
        padding: 4rem 0;
        background-color: var(--grey-900);
    }

    h2 {
        margin: 0;
        color: var(--white);
    }

    .grid-wrapper {
        margin-top: 2rem;
        background: rgba(0, 0, 0, 0) linear-gradient(rgb(55, 65, 81) calc(100% - 6rem), transparent) repeat scroll 0 0;
    }

    .grid-content {
        grid-template-columns: 1fr;
    }

    .grid {
        display: grid;
        gap: 1px;
    }

    .grid div {
        background-color: var(--grey-900);
        padding: 1rem;
        font-family: sans-serif;
    }

    .grid div:empty {
        display: none;
        padding: 0;
    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: 1px 1fr 1fr 1fr 1px;
        }
        .grid div:empty {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        .grid {
            grid-template-columns: 1fr 18rem 18rem 18rem 1fr;
        }
        .grid div {
            padding: 2rem;
        }
    }

    @media (min-width: 1280px) {
        .grid-wrapper {
            padding-top: 1px;
        }
    }
</style>
