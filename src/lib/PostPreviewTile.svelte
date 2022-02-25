<script>
    import PostDateTime from '$lib/PostDateTime.svelte';

    export let post = {};
    const {date, title, slug} = post;
</script>

<article>
    <a href={`/posts/${slug}`}><h3 class="title">{title}</h3></a>
    <div>
        <PostDateTime {date} />
    </div>
</article>

<style>
    article h3 {
        margin: 0 0 1rem 0;
        line-height: 1.8rem;
    }

    a {
        color: var(--grey-400);
        text-decoration: none;
    }

    a:hover {
        color: var(--white);
        text-decoration: underline;
    }

    div {
        display: inline-block;
        color: var(--grey-400);
        border-radius: 4px;
        font-size: smaller;
    }
</style>
