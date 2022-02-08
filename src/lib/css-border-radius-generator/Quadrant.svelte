<script>
	export let selected = 1;
	export let isPrimary = false;
</script>

<div class="wrapper {isPrimary ? 'primary' : ''}">
	{#each Array(4) as _, i}
		<div class="{selected == i ? 'active' : ''}"></div>
	{/each}
</div>

<style>
	.wrapper {
		--square: 16px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: var(--square);
		height: var(--square);
		background-color: #ddd;
	}

	.active {
		background-color: #bbb;
		transition: all .1s ease-in-out;
	}

	.wrapper:not(.primary):hover .active {
		transform: scale(1.5);
		background-color: #333;
	}

	.wrapper.primary .active {
		transform: scale(1.5);
	}


</style>
