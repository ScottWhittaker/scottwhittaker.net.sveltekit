<script>
    import PostDateTime from '$lib/PostDateTime.svelte';

    export let post = {};
    const { date, description, title, slug } = post;
</script>

<article>
<a href={`/posts/${slug}`}><h3 class="title">{title}</h3></a>
{#if description}
    <p>{description}</p>
{/if}
    <PostDateTime {date} />
</article>


<style>
    article {
        padding-bottom: 1.5rem;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
