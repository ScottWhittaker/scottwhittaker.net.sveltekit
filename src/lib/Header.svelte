<script>
	import Nav from '$lib/Nav.svelte';
	import Logo from '$lib/Logo.svelte';
	import SubHeader from '$lib/SubHeader.svelte';
</script>

<header>
	<div class="g-wrapper">
		<div class="wrapper">
			<div>
				<a href="/" title="Home">
					<Logo/>
				</a>
			</div>
			<Nav />
		</div>
	</div>
	<SubHeader/>
</header>

<style>
	header {
		color: var(--white);
		background-color: var(--grey-800);
	}
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
