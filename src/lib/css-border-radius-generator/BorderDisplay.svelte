<script>
	import DualRange from './DualRange.svelte';

	export let styles;

	let width = 320;
	let height = 240;

	const onDualRangeChanged = (w, h) => {
		width = w;
		height = h;
	};
</script>

<div class="wrapper">
	<div>
		<div class="target" style="width: {width}px; height: {height}px; border-radius: {styles};" />
	</div>
	<div class="controls">
		<DualRange
			label1="Width"
			value1={width}
			label2="Height"
			value2={height}
			max="400"
			change={onDualRangeChanged}
		/>
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
		background-image: linear-gradient(
			45deg,
			hsl(240deg 3% 6%) 0%,
			hsl(240deg 1% 9%) 21%,
			hsl(240deg 1% 11%) 30%,
			hsl(240deg 1% 14%) 39%,
			hsl(240deg 1% 16%) 46%,
			hsl(240deg 0% 18%) 54%,
			hsl(240deg 0% 21%) 61%,
			hsl(240deg 0% 23%) 69%,
			hsl(240deg 0% 26%) 79%,
			hsl(0deg 0% 29%) 100%
		);
	}

	.controls {
		min-width: 320px;
	}
</style>
