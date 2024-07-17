<script lang="ts">
    import type { ICard } from "../lib/ICard";
    import ExtendedArt from "./layouts/ExtendedArt.svelte";
    import Normal from "./layouts/Normal.svelte";

    export let definition: ICard;
</script>

<div class="card">
    <div class="inner">
        {#if definition.layout === "extendedArt"}
            <ExtendedArt definition={definition}/>
        {:else if definition.layout == "normal"}
            <Normal definition={definition}/>
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

</style>