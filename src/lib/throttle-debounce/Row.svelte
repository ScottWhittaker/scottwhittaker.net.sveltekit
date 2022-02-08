<script>
	export let items = [];
	export let currentIndex = 0;
</script>

<ul>
	{#each items as item, i}
		<li class={i === currentIndex ? 'focused' : ''}>
			{item}
		</li>
	{/each}
</ul>

<style>
	ul {
		margin-top: 1rem;
		padding: 0;
		list-style-type: none;
	}
	li {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin: 0 16px 16px 0;
		width: 64px;
		height: 64px;
		background-color: #777;
		color: #fff;
		font-weight: bold;
	}
	.focused {
		outline: 4px solid #3f678a;
		background-color: #6fb4ef;
	}
</style>
