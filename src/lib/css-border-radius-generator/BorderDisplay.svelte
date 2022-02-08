<script>
	import DualRange from './DualRange.svelte';

	export let styles;

	let width = 320;
	let height = 240;

	const onDualRangeChanged = (w, h) => {
		width = w;
		height = h;
	}
</script>

<div class="wrapper">
	<div>
		<div class="target" style="width: {width}px; height: {height}px; border-radius: {styles};"></div>
	</div>
	<div class="controls">
		<DualRange label1="Width" value1={width} label2="Height" value2={height} max="400" change={onDualRangeChanged}/>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 520px;
		background-color: #eee;
	}
	.wrapper > div:first-child {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.target {
		background-color: #206de6;
	}

	.controls {
		min-width: 320px;
	}
</style>
