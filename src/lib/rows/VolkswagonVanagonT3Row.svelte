<script>
	import FullBleed from '$lib/FullBleed.svelte';
	import VolkswagonVanagonT3 from '$lib/montague-projects/VolkswagonVanagonT3.svelte';
</script>

<div class="wrapper">
	<FullBleed>
		<div class="grid">
			<div>
				<h2>CSS Artwork</h2>
				<p>
					I found <a href="http://www.montagueprojects.com/">these amazing designs</a> so started
					doing a <a href="/posts/discovering-montague-projects">few reproductions</a> in html and css.
					I particularly like the 1970’s car series.
				</p>
			</div>
			<div class="poster-wrapper">
				<VolkswagonVanagonT3 />
			</div>
		</div>
	</FullBleed>
</div>

<style>
	.wrapper {
		margin-top: 4rem;
		overflow: hidden;
		background-color: var(--grey-800);
		color: var(--grey-300);
	}
	.poster-wrapper {
		margin-left: -1rem;
	}
	h2 {
		display: inline-block;
		color: var(--grey-800);
		background-color: #f2f10f;
		padding: 0 0.5rem;
	}
	p {
		margin-bottom: 2rem;
	}
	a {
		color: var(--white);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	@media (min-width: 768px) {
		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 2.5rem;
		}
		.grid > div {
			align-self: end;
		}
	}
</style>
