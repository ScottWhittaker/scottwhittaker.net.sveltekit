<script>
	import Nav from '$lib/Nav.svelte';
</script>

<header>
	<div class="g-wrapper">
		<div class="wrapper">
			<div>
				<a href="/"><img src="/logo.svg" alt="site logo" width="64"></a>
			</div>
			<h1 class="sr-only">Scott Whittaker</h1>
			<Nav />
		</div>
	</div>
</header>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
	.wrapper > div {
		flex: 1;
	}

	img {
		width: 64px;
		height: 64px;
		display: inline-block;
	}
</style>
