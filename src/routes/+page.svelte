<script lang="ts">
    import { onMount } from "svelte";
    import Card from "../components/Card.svelte";
    import type { ICard } from "$lib/ICard";

    const basePath = "data/cards";
    let cardDetails: (ICard|undefined)[] = [];

    onMount(async function() {
        const indexContent = await fetch(basePath + "/_index.json").then(it => it.json());
        cardDetails = new Array(indexContent.length).fill(undefined);
        indexContent.forEach((path: string, index: number) => {
        fetch(basePath + "/" + path)
            .then(it => it.json())
            .then(json => cardDetails = cardDetails.with(index, json));
        });
    });
</script>

{#if cardDetails.length === 0} 
    <p>Loading index...</p>
{:else}
    <p>There are currently {cardDetails.length} cards in the index.</p>
{/if}

<div class="cards">
    {#each cardDetails as card}
        {#if card !== undefined}
            <div class="card-holder">
                <Card definition={card}/>
            </div>
        {:else}
            <div class="placeholder">Loading...</div>
        {/if}
    {/each}
</div>

<style>
    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .placeholder {
        width: 335px;
        height: 468px;
    }
</style>