<script lang="ts">
    import type { ICard } from "../../lib/ICard";

    import CostTrack from "../blocks/CostTrack.svelte";
    import ValueBox from "../blocks/ValueBox.svelte";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";
    import Art from "../blocks/Art.svelte";

    export let cardDefinition: ICard;
</script>

<header>
{#if cardDefinition.value !== undefined}
    <ValueBox value={cardDefinition.value} />
{/if}

{#if cardDefinition.cost !== undefined}
    <CostTrack cost={cardDefinition.cost} />
{/if}
</header>

<main class="main-block">
    <Art uri={cardDefinition.artUri} />

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