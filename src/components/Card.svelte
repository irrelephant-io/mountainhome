<script lang="ts">
    import { mm2pix, styled } from "$lib/LayoutUtils";
    import type { ICard } from "../lib/ICard";
    import CostTrack from "./blocks/CostTrack.svelte";
    import ValueBox from "./blocks/ValueBox.svelte";
    import ExtendedArt from "./layouts/ExtendedArt.svelte";
    import FullText from "./layouts/FullText.svelte";
    import Helper from "./layouts/Helper.svelte";
    import Normal from "./layouts/Normal.svelte";

    export let definition: ICard;

    $: css = {
        'width': mm2pix(63.5),
        'height': mm2pix(88.9),
        'padding': mm2pix(2)
    };
</script>

<div class="card" style="{styled(css)}">
    <div class="outer">
        <div class="inner {definition.rarity}">
            <header>
                {#if definition.value !== undefined}
                    <ValueBox 
                        rarity={definition.rarity}
                        value={definition.value}
                    />
                {/if}

                {#if definition.cost !== undefined}
                    <CostTrack 
                        rarity={definition.rarity}
                        cost={definition.cost}
                    />
                {/if}
            </header>

            {#if definition.layout === "extendedArt"}
                <ExtendedArt definition={definition}/>
            {:else if definition.layout === "normal"}
                <Normal definition={definition}/>
            {:else if definition.layout === "fullText"}
                <FullText definition={definition}/>
            {:else if definition.layout === "helper"}
                <Helper definition={definition}/>
            {:else}
                <p>Unknown Layout!</p>
            {/if}
        </div>
    </div>
</div>

<style>
    .outer {
        width: var(--width);
        height: var(--height);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        padding: var(--padding);
        background: black;
        font-family: 'Donegal One'
    }

    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to top,
            rgba(164, 176, 190, 0.5),
            rgba(164, 176, 190, 0.3)),
            url('/art/normal-bg.png'
        ) no-repeat top center;
        background-size: inherit;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        border-radius: var(--padding);
        padding: var(--padding);
        display: flex;
        flex-direction: column;
    }

    .inner.rare {
        background: linear-gradient(
            49.18deg,
            #AF9143 12.3%,
            #F4DF92 32.82%,
            #FFEDAE 52.74%,
            #FFE467 68.53%,
            #FFE196 84.46%
        );
    }

</style>