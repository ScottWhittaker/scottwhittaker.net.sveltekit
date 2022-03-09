<script>
    import PostDateTime from '$lib/PostDateTime.svelte';

    export let post = {};
    const { date, title, slug } = post;
</script>

<a href={`/posts/${slug}`}><h3 class="title">{title}</h3></a>
<div>
    <PostDateTime {date} />
</div>

<style>
    a {
        color: var(--grey-500);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    div {
        display: inline-block;
        padding: 0 .5rem;
        color: var(--grey-700);
        font-size: smaller;
        border: 1px solid var(--grey-200);
        border-radius: 4px;
    }
</style>
