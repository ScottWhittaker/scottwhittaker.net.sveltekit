<script>
	import BorderDualRange from './BorderDualRange.svelte';
	import Toolbar from './Toolbar.svelte';

	export let onChange;

	let lengthOrPercentage = '%';

	let borders = [
		{
			label: 'Top Left',
			value1: 64,
			value2: 16
		},
		{
			label: 'Top Right',
			value1: 0,
			value2: 0
		},
		{
			label: 'Bottom Left',
			value1: 0,
			value2: 0
		},
		{
			label: 'Bottom Right',
			value1: 0,
			value2: 0
		}
	];

	const onToolbarClick = (originIndex, targetIndex) => {
		borders[targetIndex].value1 = borders[originIndex].value1;
		borders[targetIndex].value2 = borders[originIndex].value2;
		// https://svelte.dev/tutorial/updating-arrays-and-objects
		borders = borders;
	};

	const onReset = (index) => {
		borders[index].value1 = 0;
		borders[index].value2 = 0;
		borders = borders;
	};

	const onDualRangeChanged = (index, v1, v2) => {
		borders[index].value1 = v1;
		borders[index].value2 = v2;
		borders = borders;
	};

	const getOtherBorders = (indexToFilter) => {
		return borders.filter((border, i) => {
			if (i !== indexToFilter) {
				// add the index so other components can call back with it
				return Object.assign(border, { index: i });
			}
		});
	};

	$: onChange(
		`${borders[0].value1}${lengthOrPercentage} ${borders[1].value1}${lengthOrPercentage} ${borders[3].value1}${lengthOrPercentage} ${borders[2].value1}${lengthOrPercentage} / ${borders[0].value2}${lengthOrPercentage} ${borders[1].value2}${lengthOrPercentage} ${borders[3].value2}${lengthOrPercentage} ${borders[2].value2}${lengthOrPercentage}`
	);
</script>

<div class="controls">
	{#each borders as border, i}
		<div>
			<Toolbar
				{onToolbarClick}
				selectedBorderIndex={i}
				{onReset}
				otherBorders={getOtherBorders(i)}
			/>
			<BorderDualRange
				label1={`${border.label} horizontal radius`}
				value1={border.value1}
				value2={border.value2}
				label2={`${border.label} vertical radius`}
				max="100"
				selectedBorderIndex={i}
				change={onDualRangeChanged}
			/>
		</div>
	{/each}
</div>

<style>
	.controls {
		display: grid;
		gap: 16px;
		max-width: 800px;
	}

	.controls > div {
		display: grid;
		gap: 16px;
		padding: 16px;
		border: 1px solid #eee;
	}
</style>
