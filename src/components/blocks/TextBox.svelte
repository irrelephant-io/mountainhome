<script lang="ts">
    import type { Rarity } from "$lib/Rarity";
    import type { Watermark } from "$lib/Watermark";
    import RichText from "./RichText.svelte";
    import WatermarkBlock from "./WatermarkBlock.svelte";
    
    export let rarity: Rarity;
    export let watermark: Watermark | undefined;
    export let mainText: string | undefined;
    export let flavourText: string | undefined;
    export let cardType: string;
</script>

<div class="box">
    {#if mainText && flavourText}
        <div class="main {rarity} round-top solid-top solid-bottom solid-sides">
            <RichText text={mainText}/>
            {#if watermark !== undefined}
                <WatermarkBlock watermark={watermark}/>
            {/if}
        </div>
        <div class="type {rarity}">{cardType}</div>
        <div class="flavour {rarity} round-bottom solid-bottom solid-sides">
            <p>"{flavourText}"</p>
        </div>
    {:else if mainText}
      <div class="main {rarity} round-top round-bottom solid-top solid-bottom solid-sides">
        <RichText text={mainText}/>
        {#if watermark !== undefined}
            <WatermarkBlock watermark={watermark}/>
        {/if}
      </div>
      <div class="type {rarity}">{cardType}</div>
    {:else}
        <div class="flavour {rarity} full round-top solid-top round-bottom solid-bottom solid-sides">
            <p>"{flavourText}"</p>
        </div>
        <div class="type {rarity}">{cardType}</div>
    {/if}
</div>

<style lang="css">
    :root {
        --type-box-vertical-offset-mm: 1;
        --type-box-vertical-offset: calc(var(--type-box-vertical-offset-mm) * var(--dpi-factor) * 1px);
        --type-box-width-mm: 35;
        --type-box-width: calc(var(--type-box-width-mm) * var(--dpi-factor) * 1px);

        --text-box-border-radius-mm: 2.5;
        --text-box-border-radius: calc(var(--text-box-border-radius-mm) * var(--dpi-factor) * 1px);
        --text-box-font-size-mm: 2.5;
        --text-box-font-size: calc(var(--text-box-font-size-mm) * var(--dpi-factor) * 1px);
        --type-box-height-mm: 2.9;
        --type-box-height: calc(var(--type-box-height-mm) * var(--dpi-factor) * 1px);
        
        --main-text-padding-sides-mm: 1.7;
        --main-text-padding-sides: calc(var(--main-text-padding-sides-mm) * var(--dpi-factor) * 1px);
        --main-text-padding-top-mm: 1.2;
        --main-text-padding-top: calc(var(--main-text-padding-top-mm) * var(--dpi-factor) * 1px);

        --flavour-padding-sides-mm: 2;
        --flavour-padding-top-mm: 0.5;
        --flavour-padding-bottom-mm: 1;
        --flavour-padding-sides: calc(var(--flavour-padding-sides-mm) * var(--dpi-factor) * 1px);
        --flavour-padding-top: calc(var(--flavour-padding-top-mm) * var(--dpi-factor) * 1px);
        --flavour-padding-bottom: calc(var(--flavour-padding-bottom-mm) * var(--dpi-factor) * 1px);
    }

    .flavour {
        position: relative;
        font-size: var(--text-box-font-size);
        text-align: center;
        font-family: var(--alt-font-family);
        background: rgba(0, 0, 0, 0.03);
        flex-grow: 0;
        white-space: pre-wrap;
        padding: var(--flavour-padding-top) var(--flavour-padding-sides) var(--flavour-padding-bottom) var(--flavour-padding-sides);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flavour.rare {
        background: rgba(223, 228, 234, 0.2);
    }

    .flavour.full {
        flex-grow: 1;
    }

    .solid-top {
        border-top: var(--main-border);
    }

    .solid-sides {
        border-left: var(--main-border);
        border-right: var(--main-border);
    }

    .solid-bottom {
        border-bottom: var(--main-border);
    }

    .round-top {
        border-top-left-radius: var(--text-box-border-radius);
        border-top-right-radius: var(--text-box-border-radius);
    }

    .round-bottom {
        border-bottom-left-radius: var(--text-box-border-radius);
        border-bottom-right-radius: var(--text-box-border-radius);
    }

    .main {
        background-color: white;
        position: relative;
        flex: 2.5;
        color: #000;
        font-size: var(--text-box-font-size);
        font-style: normal;
        font-weight: 400;
        line-height: 1.3;
        padding: var(--main-text-padding-top) var(--main-text-padding-sides);
    }

    .main.rare {
        background: rgba(253, 238, 220, 0.8);
    }
    
    .box {
        background: rgba(30.0, 30.0, 30.0, 0.15);
        border-radius: var(--text-box-border-radius);
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .type {
        position: absolute;
        height: var(--type-box-height);
        border-radius: var(--type-box-height);
        text-transform: uppercase;
        width: var(--type-box-width);
        bottom: var(--type-box-vertical-offset);
        left: calc(50% - calc(var(--type-box-width) / 2));
        text-align: center;
        background-repeat: round;
        border: 1px solid black;
        font-size: calc(var(--type-box-height) * 0.75);
        font-weight: 700;
        z-index: 1;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.0) 0%,
            rgba(0, 0, 0, 0.06) 44.06%,
            rgba(0, 0, 0, 0.30) 99.99%,
            rgba(0, 0, 0, 0.00) 100%
        ), rgba(223, 228, 234, 1);
    }

    .type.rare {
        background-color: var(--color-bg-rare);
    }
</style>