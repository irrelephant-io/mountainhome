<script lang="ts">
    import type { Rarity } from "$lib/Rarity";
    import type { Cost } from "../../lib/Cost";
    import CostBlock from "./cost/CostBlock.svelte";

    export let cost: Cost;
    export let rarity: Rarity;
</script>

<div class="box">
    {#each cost as block, blockIndex}
        {#if blockIndex == cost.length - 1}
            <CostBlock rarity={rarity} costBlock={block} type="end" />
        {:else if blockIndex == 0}
            <CostBlock rarity={rarity} costBlock={block} type="start" />
        {:else}
            <CostBlock rarity={rarity} costBlock={block} type="link" />
        {/if}
    {/each}
</div>

<style lang="css">
    .box {
        display: flex;
        position: absolute;
        top: 5px;
        right: 16px;
        z-index: 2;
    }
</style>