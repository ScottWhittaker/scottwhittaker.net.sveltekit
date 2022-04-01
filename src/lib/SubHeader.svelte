<script>
    import FullBleed from '$lib/FullBleed.svelte';
</script>

<div class="wrapper">
    <FullBleed>
        <div class="grid">
            <h1>Scott Whittaker</h1>
            <p>Software engineer</p>
            <p class="status">Day job React | side projects <strong>Svelte</strong></p>
        </div>
    </FullBleed>
</div>

<style>
    .wrapper {
        padding: 1rem 0;
        color: var(--grey-200);
        background-color: var(--grey-700);
    }
    .grid {
        display: flex;
        flex-direction: column;
    }
    h1 {
        font-size: 1.7rem;
        letter-spacing: -1px;
    }
    h1, p {
        margin: 0;
    }
    p {
        font-size: smaller;
    }
    .status {
        margin-top: 1rem;

    }

    @media (min-width: 768px) {
        .grid {
            flex-direction: row;
            align-items: baseline;
            gap: 2rem;
        }
        .status {
            margin-top: 0;
        }
    }
</style>

