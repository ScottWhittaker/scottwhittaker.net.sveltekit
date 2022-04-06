<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import FullBleed from '$lib/FullBleed.svelte';
</script>

<svelte:head>
	<title>CSS Border Radius Generator</title>
	<meta name="description" content="Just another CSS border radius generator. This one is written in svelte." />
	<link rel="stylesheet" href="/reset.css" />
	<link rel="stylesheet" href="/global.css" />
	<link rel="stylesheet" href="/styles.css" />
</svelte:head>

<Header />

<main>
	<FullBleed>
		<h2>CSS Border Radius Generator</h2>
	</FullBleed>
	<slot />
</main>

<Footer />

<style>
	main {
		padding: 2rem 1rem;
	}
	h2 {
		margin-bottom: 2rem;
	}
</style>
