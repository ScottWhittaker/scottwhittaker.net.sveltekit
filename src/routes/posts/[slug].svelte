<script context="module">
    export async function load({ params }) {
        const post = {
            title: params.slug,
            date: new Date()
        }

        return {
            props: {
                post
            }
        }
    }
</script>

<script>
    export let post
</script>

<h3>slug detail {post.title}</h3>