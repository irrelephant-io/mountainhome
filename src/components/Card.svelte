<script lang="ts">
    import type { ICard } from "../lib/ICard";
    import ExtendedArt from "./layouts/ExtendedArt.svelte";
    import Normal from "./layouts/Normal.svelte";

    export let cardDefinition: ICard;
</script>

<div class="card">
    <div class="inner">
        {#if cardDefinition.layout === "extendedArt"}
            <ExtendedArt cardDefinition={cardDefinition}/>
        {:else if cardDefinition.layout == "normal"}
            <Normal cardDefinition={cardDefinition}/>
        {/if}
    </div>
</div>

<style>
    .card {
        width: 335px;
        height: 468px;
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

</style>