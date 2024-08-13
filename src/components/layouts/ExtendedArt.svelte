<script lang="ts">
    import type { ICard } from "../../lib/ICard";
    import ExtendedArt from "../blocks/ExtendedArt.svelte";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";

    export let definition: ICard;
</script>

<main class="main-block">
    <ExtendedArt uri={definition.artUri}/>
    <CardTitle
        title={definition.title}
        rarity={definition.rarity}
    />
    <TextBox
        mainText={definition.mainText}
        watermark={definition.watermark}
        flavourText={definition.flavourText}
        cardType={definition.type}
        rarity={definition.rarity}
    />
</main>

<style>
    :root {
        --gap-mm: 2;
        --gap: calc(var(--gap-mm) * var(--dpi-factor) * 1px);
    }

    main.main-block {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        height: 100%;
    }
</style>

