<script lang="ts">
    import { mm2pix, styled } from "$lib/LayoutUtils.js";
    import type { Rarity } from "../../lib/Rarity.ts";

    export let title: string;
    export let rarity: Rarity;

    $: css = {
        'height': mm2pix(5),
        'font-size': mm2pix(2.7),
        'padding': mm2pix(2)
    }
</script>

<div class="name box {rarity}" style={styled(css)}>{title}</div>

<style lang="css">
    .name {
        height: var(--height);
        line-height: var(--height);
        position: relative;
        font-size: var(--font-size);
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
        border-radius: calc(var(--height) / 2);
        padding: 0 var(--padding);
        flex-shrink: 0;
    }
    
    .rare.box {
        background-color: var(--color-bg-rare);
    }
</style>
