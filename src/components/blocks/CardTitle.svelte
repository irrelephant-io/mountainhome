<script lang="ts">
    import type { Rarity } from "../../lib/Rarity.ts";

    export let title: string;
    export let rarity: Rarity;
</script>

<div class="name box {rarity}">{title}</div>

<style lang="css">
    :root {
        --title-height-mm: 5;
        --title-font-size-mm: 2.7;
        --padding-mm: 2;

        --padding: calc(var(--padding-mm) * var(--dpi-factor) * 1px);
        --title-height: calc(var(--title-height-mm) * var(--dpi-factor) * 1px);
        --title-font-size: calc(var(--title-font-size-mm) * var(--dpi-factor) * 1px);
    }

    .name {
        height: var(--title-height);
        line-height: var(--title-height);
        position: relative;
        font-size: var(--title-font-size);
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
        border-radius: calc(var(--title-height) / 2);
        padding: 0 var(--padding);
        flex-shrink: 0;
    }
    
    .rare.box {
        background-color: var(--color-bg-rare);
    }
</style>
