<script lang="ts">
    import type { ICard } from "../../lib/ICard";

    import CostTrack from "../blocks/CostTrack.svelte";
    import ValueBox from "../blocks/ValueBox.svelte";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";
    import Art from "../blocks/Art.svelte";

    export let definition: ICard;
</script>

<header>
{#if definition.value !== undefined}
    <ValueBox value={definition.value} />
{/if}

{#if definition.cost !== undefined}
    <CostTrack cost={definition.cost} />
{/if}
</header>

<main class="main-block">
    <Art uri={definition.artUri} />

    <CardTitle
        title={definition.title}
        rarity={definition.rarity}
    />
    <TextBox
        mainText={definition.mainText}
        flavourText={definition.flavourText}
        cardType={definition.type}
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