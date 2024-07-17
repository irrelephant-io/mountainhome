<script lang="ts">
    import { onMount } from "svelte";
    import Card from "../../components/Card.svelte";
    import cards from "$data/cards/index.json";
    import type { ICard } from "$lib/ICard";

    const basePath = "data/cards";
    let cardDetails: (ICard|undefined)[] = new Array(cards.length).fill(undefined);

    onMount(async function() {
        cards.forEach((path, index) => {
        fetch(basePath + "/" + path)
            .then(it => it.json())
            .then(json => cardDetails = cardDetails.with(index, json));
        });
    });
</script>

<p>There are currently {cards.length} cards in the index.</p>
<div class="cards">
    {#each cardDetails as card}
        {#if card !== undefined}
            <Card definition={card}/>
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

    .cards>.placeholder {
        width: 335px;
        height: 468px;
    }
</style>