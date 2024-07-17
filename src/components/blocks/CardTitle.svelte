<script lang="ts">
    import type { Rarity } from "../../lib/Rarity.ts";

    export let title: string;
    export let rarity: Rarity;
</script>

{#if rarity === "normal"}
    <div class="name box">{title}</div>
{:else}
    <div class="name box rare">{title}</div>
{/if}

<style lang="css">
    .name {
        line-height: 30px;
        position: relative;
        height: 30px;
        font-size: 15px;
        font-weight: 700;
    }
    
    .box {
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.0) 0%,
            rgba(0, 0, 0, 0.06) 44.06%,
            rgba(0, 0, 0, 0.30) 99.99%,
            rgba(0, 0, 0, 0.00) 100%
        ),rgba(223, 228, 234, 0.60);
        border: 1px solid black;
        border-radius: 15px;
        padding: 0 15px;
    }
    
    .rare.box {
        border: 1px solid gold;
    }
</style>
