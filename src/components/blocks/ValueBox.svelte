<script lang="ts">
    import type { Rarity } from "$lib/Rarity.js";
    import type { IValue } from "../../lib/Value.ts";
    import Value from "./Value.svelte";
    
    export let value: IValue;
    export let rarity: Rarity;

</script>

<div class="box {rarity}">
    <div class="box-content">
        <Value value={value} style="big" />
    </div>
</div>

<style>
    :root {
        --cost-block-size-mm: 8.4;
        --cost-block-size: calc(var(--cost-block-size-mm) * var(--dpi-factor) * 1px);
    }
    .box {
        width: var(--cost-block-size);
        height: var(--cost-block-size);
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 2;
        border-radius: 45% 15%;
        border: 1px solid #000;
        background: linear-gradient(
            218deg,
            rgba(0, 0, 0, 0.00) 0%,
            rgba(0, 0, 0, 0.08) 44.06%,
            rgba(0, 0, 0, 0.40) 99.99%,
            rgba(0, 0, 0, 0.00) 100%
        ), #DFE4EA;
    }

    .box.rare {
        background: linear-gradient(
            218.42deg,
            rgba(0, 0, 0, 0) 7.01%,
            rgba(0, 0, 0, 0.0820834) 46.59%,
            rgba(0, 0, 0, 0.4) 96.82%,
            rgba(0, 0, 0, 0) 96.83%
        ), #FFE8AE;
    }

    .box-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>