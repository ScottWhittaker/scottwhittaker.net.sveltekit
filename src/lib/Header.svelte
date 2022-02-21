<script>
    import Nav from '$lib/Nav.svelte';
</script>

<header>
    <div class="g-wrapper">
        <div class="wrapper">
            <h1>Scott Whittaker</h1>
            <Nav/>
        </div>
    </div>
</header>

<style>
    h1 {
        margin: 0 0 .5rem 0;
        padding: 0;
        font-size: 2rem;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--grey-lighter);
    }
    @media (min-width: 640px) {
        .wrapper {
            flex-direction: row;
        }
        header {
            padding-top: 2rem;
        }
        h1 {
            flex: 1;
            margin: 0;
            font-size: 1.5rem;
        }
    }
</style>
