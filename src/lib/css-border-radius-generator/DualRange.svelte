<script>

  import uniqueid from 'lodash.uniqueid';

  export let value1 = 0;
  export let value2 = 0;
  export let label1;
  export let label2;
  export let max = 100;
  export let change;

  function getUniqueLabel(label) {
    if (!label) return uniqueid();
    const kebabCaseLabel = label.split(' ').join('-').toLowerCase();
    return uniqueid(`${kebabCaseLabel}-`);
  }

  const id1 = getUniqueLabel(label1);
  const id2 = getUniqueLabel(label2);

</script>

<div>
  <label for={id1} class="sr-only">{label1}</label>
  <input
    id={id1}
    type="range"
    min="0"
    {max}
    bind:value={value1}
    on:input={change(value1, value2)} />
  <span>{value1}</span>
  <label for={id2} class="sr-only">{label2}</label>
  <input
    id={id2}
    type="range"
    min="0"
    {max}
    bind:value={value2}
    on:input={change(value1, value2)} />
  <span>{value2}</span>
</div>


<style>
  div {
    --track-bg: #ddd;
    --thumb-bg: #aaa;

    display: grid;
    grid-template-columns: 1fr min-content;
    gap: 8px;
    justify-items: center;
    align-items: center;
  }

  span {
    width: 48px;
    padding: 4px 8px;
    text-align: right;
    background-color: #333;
    color: #fff;
    border-radius: 2px;
    font-size: 14px;
  }

  input[type="range"] {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: transparent;
    -webkit-appearance: none;
    border: 0;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: var(--track-bg);
    /* border: 0px solid rgba(0, 0, 0, 0); */
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 6px;
    cursor: pointer;
  }
  input[type="range"]::-webkit-slider-thumb {
    margin-top: -5px;
    width: 16px;
    height: 16px;
    background: var(--thumb-bg);
    border: 0;
    border-radius: 16px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #646464;
  }
  input[type="range"]::-moz-range-track {
    background: var(--track-bg);
    /* border: 0px solid rgba(0, 0, 0, 0); */
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 4px;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: var(--thumb-bg);
    border: 0;
    border-radius: 16px;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 5px 0;
    color: transparent;
    width: 100%;
    height: 6px;
    cursor: pointer;
  }
  input[type="range"]::-ms-fill-lower {
    background: #464646;
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 16px;
  }
  input[type="range"]::-ms-fill-upper {
    background: #555555;
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 16px;
  }
  input[type="range"]::-ms-thumb {
    width: 16px;
    height: 16px;
    background: #555555;
    border: 0;
    border-radius: 16px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #555555;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #646464;
  }
</style>
