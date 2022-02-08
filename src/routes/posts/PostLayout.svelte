<script>
    export let title;
    export let description = '';
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
    <link rel="stylesheet" href="/ally-light.css">
</svelte:head>

<h2>{title}</h2>
<slot></slot>

