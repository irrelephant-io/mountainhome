<script lang="ts">
    import { onMount } from "svelte";
    import Card from "../components/Card.svelte";
    import type { ICard } from "$lib/ICard";
    import { loadCards } from "$lib/api/CardLibrary";
    import PreviewContext from "../components/context/PreviewContext.svelte";

    let cardDetails: (ICard[]) = [];

    onMount(async function() {
        cardDetails = await loadCards();
    });
</script>

{#if cardDetails.length === 0}
    <p>Loading index...</p>
{:else}
    <p>There are currently {cardDetails.length} cards in the index.</p>
{/if}

<PreviewContext>
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
</PreviewContext>

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