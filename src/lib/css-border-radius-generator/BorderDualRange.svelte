<script>
    import DualRange from './DualRange.svelte';

    export let value1 = 0;
    export let value2 = 0;
    export let label1;
    export let label2;
    export let max = 100;
    export let change;
    export let selectedBorderIndex;

    const onChange = (v1, v2) => {
        change(selectedBorderIndex, v1, v2);
    }
</script>

<DualRange label1={label1} value1={value1} label2={label2} value2={value2} max={max} change={onChange}/>
