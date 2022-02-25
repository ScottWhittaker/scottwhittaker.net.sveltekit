<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="/reset.css" />
	<link rel="stylesheet" href="/global.css" />
	<link rel="stylesheet" href="/styles.css" />
</svelte:head>

<Header />

<main>
	<div class="g-wrapper">
		<slot />
	</div>
</main>

<Footer />

<style>
	@media (min-width: 640px) {
		main {
			padding-top: 4rem;
		}
	}
</style>
