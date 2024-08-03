<script lang="ts">
    import type { ICard } from "../lib/ICard";
    import CostTrack from "./blocks/CostTrack.svelte";
    import ValueBox from "./blocks/ValueBox.svelte";
    import ExtendedArt from "./layouts/ExtendedArt.svelte";
    import FullText from "./layouts/FullText.svelte";
    import Helper from "./layouts/Helper.svelte";
    import Normal from "./layouts/Normal.svelte";

    export let definition: ICard;
</script>

<div class="card">
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

<style>
    .card {
        width: 315px;
        height: 448px;
        background: black;
        color: white;
        padding: 10px;
        color: black;
        font-family: 'Donegal One'
    }

    .inner {
        padding: 10px;
        position: relative;
        height: calc(100% - 20px);
        background: linear-gradient(
            to top,
            rgba(164, 176, 190, 0.5),
            rgba(164, 176, 190, 0.3)),
            url('/art/normal-bg.png'
        ) no-repeat top center;
        background-size:  cover;
        border-radius: 15px;
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