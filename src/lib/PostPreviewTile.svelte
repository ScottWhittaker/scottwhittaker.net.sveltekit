<script>
    import PostDateTime from '$lib/PostDateTime.svelte';

    export let post = {};
    const {date, title, slug} = post;
</script>

<article>
    <a href={`/posts/${slug}`}><h3 class="title">{title}</h3></a>
    <PostDateTime {date} />
</article>

<style>
    article {
        padding: 1rem;
        border-bottom: 1px solid var(--grey-light);
    }

    article h3 {
        margin: 0;
        color: inherit;
    }


    a {
        text-decoration: none;
        color: inherit;

    }
    a:hover {
        text-decoration: underline;
    }

    @media (min-width: 640px) {
        article {
            border: 1px solid var(--grey-light);
        }
    }
</style>
