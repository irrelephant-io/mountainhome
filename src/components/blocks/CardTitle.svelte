<script lang="ts">
    import type { Rarity } from "../../lib/Rarity.ts";

    export let title: string;
    export let rarity: Rarity;
</script>

<div class="name box {rarity}">{title}</div>

<style lang="css">
    :root {
        --title-height-mm: 5;
        --title-height: calc(var(--title-height-mm) * var(--dpi-factor) * 1px);
    }

    .name {
        height: var(--title-height);
        line-height: var(--title-height);
        position: relative;
        font-size: 30px;
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
        padding: 0 15px;
    }
    
    .rare.box {
        background-color: var(--color-bg-rare);
    }
</style>
