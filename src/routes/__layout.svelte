<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<Header/>

<main>
    <div class="g-wrapper">
        <slot></slot>
    </div>
</main>

<Footer/>
