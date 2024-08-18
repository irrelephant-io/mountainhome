<script lang="ts">
    import { mm2pix, styled } from "$lib/LayoutUtils";
    import type { ICard } from "../../lib/ICard";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";

    export let definition: ICard;
    
    $: css = {
        'gap': mm2pix(2)
    };
</script>

<main class="main-block" style="{styled(css)}">
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
    main.main-block {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        height: 100%;
    }
</style>