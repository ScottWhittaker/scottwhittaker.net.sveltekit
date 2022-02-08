<script>
    import PostDateTime from '$lib/PostDateTime.svelte';

    export let post = {};
    const {date, title, slug} = post;
</script>

<a href={`/posts/${slug}`}><h2 class="title">{title}</h2></a>
<PostDateTime {date} />

<style>
    h2 {
        margin-top: 2rem;
    }
    a {
        text-decoration: none;
        color: var(--grey-darkest);
    }
    a:hover {
        text-decoration: underline;
    }
</style>
