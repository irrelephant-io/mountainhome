<script lang="ts">
    import { mm2pix, styled } from "$lib/LayoutUtils.js";
    import type { Rarity } from "$lib/Rarity.js";
    import type { IValue } from "../../lib/Value.ts";
    import Value from "./Value.svelte";
    
    export let value: IValue;
    export let rarity: Rarity;
    $: css = {
        'cost-block-offset': mm2pix(1),
        'cost-block-size': mm2pix(8.4)
    };
</script>

<div class="box {rarity}" style="{styled(css)}">
    <div class="box-content">
        <Value value={value} style="big" />
    </div>
</div>

<style>
    .box {
        width: var(--cost-block-size);
        height: var(--cost-block-size);
        position: absolute;
        top: var(--cost-block-offset);
        left: var(--cost-block-offset);
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