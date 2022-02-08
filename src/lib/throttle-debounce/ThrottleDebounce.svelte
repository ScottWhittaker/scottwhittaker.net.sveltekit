<script>
    import throttle from 'lodash.throttle';
	import debounce from 'lodash.debounce';
	import Row from './Row.svelte';
	import { getNextIndex, getPreviousIndex } from './utils';

	const items = [...new Array(8).keys()];
	let currentIndexThrottled = 0;
	let currentIndexDebounced = 0;

	const DELAY = 200;

	// https://lodash.com/docs/#throttle
	// Creates a throttled function that only invokes func at
	// most once per every wait milliseconds.
	const throttleKeydown = throttle((e) => {
		switch (e.key) {
			case 'ArrowRight':
				currentIndexThrottled = getNextIndex(currentIndexThrottled, items.length);
				return;
			case 'ArrowLeft':
				currentIndexThrottled = getPreviousIndex(currentIndexThrottled, items.length);
				return;
			default:
		}
	}, DELAY);

	// https://lodash.com/docs/#debounce
	// Creates a debounced function that delays invoking func
	// until after wait milliseconds have elapsed since the last
	// time the debounced function was invoked.
	const debounceKeydown = debounce((e) => {
		switch (e.key) {
			case 'ArrowRight':
				currentIndexDebounced = getNextIndex(currentIndexDebounced, items.length);
				return;
			case 'ArrowLeft':
				currentIndexDebounced = getPreviousIndex(currentIndexDebounced, items.length);
				return;
			default:
		}
	}, DELAY);

	const handleKeydown = (e) => {
		throttleKeydown(e);
		debounceKeydown(e);
	};

</script>

<svelte:window on:keydown={handleKeydown} />

<h3>Throttled</h3>
<Row {items} currentIndex={currentIndexThrottled} />
<h3>Debounced</h3>
<Row {items} currentIndex={currentIndexDebounced} />

<style>
    h3 {
        margin: 0;
    }
</style>