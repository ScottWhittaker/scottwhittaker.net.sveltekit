<script>
	import Nav from '$lib/Nav.svelte';
	import Logo from '$lib/Logo.svelte';
</script>

<header>
	<div class="g-wrapper">
		<div class="wrapper">
			<div>
				<a href="/">
					<Logo/>
				</a>
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
</style>
