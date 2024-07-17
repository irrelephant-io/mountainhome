<script lang="ts">
    import type { ICard } from "../../lib/ICard";

    import Art from "../blocks/Art.svelte";
    import CostTrack from "../blocks/CostTrack.svelte";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";
    import ValueBox from "../blocks/ValueBox.svelte";

    export let cardDefinition: ICard;
</script>

{#if cardDefinition.value !== undefined}
    <ValueBox value={cardDefinition.value} />
{/if}

{#if cardDefinition.cost !== undefined}
    <CostTrack cost={cardDefinition.cost} />
{/if}



<main class="main-block">
    <Art uri={cardDefinition.artUri} style="extended"/>
    <CardTitle
        title={cardDefinition.title}
        rarity={cardDefinition.rarity}
    />
    <TextBox
        mainText={cardDefinition.mainText}
        flavourText={cardDefinition.flavourText}
        cardType={cardDefinition.type}
    />
</main>

<style>
    main.main-block {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;
    }
</style>
