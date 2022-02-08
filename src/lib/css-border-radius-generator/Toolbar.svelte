<script>
    import Quadrant from './Quadrant.svelte';

    export let selectedBorderIndex;
    export let onToolbarClick;
    export let onReset;
    export let otherBorders;
</script>

<div class="grid">
    <div><Quadrant selected={selectedBorderIndex} isPrimary={true}/></div>
    {#each otherBorders as border}
        <button on:click={onToolbarClick(selectedBorderIndex, border.index)} aria-label={`Copy styles to ${border.label} border`}><Quadrant selected={border.index}/></button>
    {/each}
    <button class="reset" on:click={onReset(selectedBorderIndex)} aria-label="Reset">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/></svg>
    </button>
</div>

<style>
    .grid {

        --square: 22px;

        display: grid;
        grid-template-columns: 3fr var(--square) var(--square) var(--square) 22px;
        align-items: center;
        gap: 4px;
    }

    button {
        margin: 0;
        padding: 0;
		width: var(--square);
        height: var(--square);
        background: none;
        border: none;
        cursor: pointer;
    }

    .reset {
        fill: #bbb;
    }

    .reset:hover {
        fill: #333;
    }

</style>
