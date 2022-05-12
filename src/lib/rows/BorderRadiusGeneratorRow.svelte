<script>
	import FullBleed from '$lib/FullBleed.svelte';
	import BorderRadiusGeneratorTile from '$lib/rows/BorderRadiusGeneratorTile.svelte';
</script>

<div class="wrapper">
	<FullBleed>
		<div class="grid">
			<h2>
				<BorderRadiusGeneratorTile />
			</h2>
			<div>
				<p>Just another CSS border radius generator</p>
				<p>
					I was starting <a href="/posts/discovering-montague-projects">this CSS reproduction</a> of
					a car and needed a shape for something which gave me a nice excuse to use
					<a href="https://svelte.dev/">Svelte</a> to make a little utility, and to learn more about
					Svelte of course.
				</p>
			</div>
		</div>
	</FullBleed>
</div>

<style>
	.wrapper {
		color: #fff;
		padding: 4rem;
		background-color: #ca1a3c;
	}
	h2 {
		margin: 0;
	}
	p:nth-child(1) {
		margin-top: 2rem;
		font-weight: bold;
		font-size: 2rem;
		line-height: 2.7rem;
	}
	a {
		color: var(--white);
	}

	@media (min-width: 768px) {
		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 2.5rem;
		}
		p:nth-child(1) {
			margin-top: 0;
		}
	}
</style>
