<script>
    import BorderDisplay from './BorderDisplay.svelte'
    import BorderStyles from './BorderStyles.svelte'
    import BorderControls from './BorderControls.svelte'

    $: borderStyles = '';

    const onBorderControlsChanged = (styles) => borderStyles = styles;

</script>

<header>
    <h1>Border Radius Generator</h1>
</header>
<main>
    <div>
        <BorderDisplay styles={borderStyles}/>
        <BorderStyles styles={borderStyles}/>
    </div>
    <BorderControls onChange={onBorderControlsChanged}/>
</main>

<style>
    h1 {
        display: inline-block;
        padding: 8px 16px;
        color: #fff;
        font-size: 18px;
        background-color: #333;
    }
    header, main {
        max-width: 1200px;
        margin: 0 auto;
    }

    main {
        display: grid;
        gap: 16px;
    }

    @media (min-width: 771px) {
        main {
            grid-template-columns: 3fr 1fr;
        }
    }
</style>

