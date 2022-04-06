<script>
	import BorderDisplay from './BorderDisplay.svelte';
	import BorderStyles from './BorderStyles.svelte';
	import BorderControls from './BorderControls.svelte';

	$: borderStyles = '';

	const onBorderControlsChanged = (styles) => (borderStyles = styles);
</script>

<div class="grid">
	<div>
		<BorderDisplay styles={borderStyles} />
		<BorderStyles styles={borderStyles} />
	</div>
	<BorderControls onChange={onBorderControlsChanged} />
</div>

<style>
	.grid {
		display: grid;
		gap: 16px;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (min-width: 771px) {
		.grid {
			grid-template-columns: 3fr 1fr;
		}
	}
</style>
