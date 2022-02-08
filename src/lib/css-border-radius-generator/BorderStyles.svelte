<script>
    export let styles;

	let input;

	const copy = () => {
		input.select();
		document.execCommand('copy');
	}
</script>

<div>
	<label for="border-radius-styles" class="sr-only">Border Radius Styles</label>
	<input id="border-radius-styles" bind:this={input} value={`border-radius: ${styles};`}/>
	<button on:click={copy}>Copy</button>
</div>


<style>

	div {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 16px;
		background-color: #eee;
	}

	input {
		margin: 0;
		padding: 0 8px;
		width: 100%;
		height: 48px;
		font-family: monospace;
		font-weight: bold;
		font-size: 12px;
		color: #555;
		border: none;
		border: 1px solid #eee;
		background-color: #fff;
	}

	button {
		margin: 0;
		padding: 0 16px;
		width: 100%;
		height: 48px;
		border: none;
		text-transform: uppercase;
		font-size: 16px;
		font-weight: bold;
		background-color: #a51766;
		color: #fff;
	}

	button:hover {
		cursor: pointer;
		background-color: #333;
	}

	@media (min-width: 601px) {
		div {
			flex-wrap: nowrap;
		}

		input {
			font-size: 16px;
		}

		button {
			width: auto;
		}
	}
</style>
