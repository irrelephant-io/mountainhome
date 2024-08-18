<script lang="ts">
    import type { ICard } from "../../lib/ICard";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";
    import Art from "../blocks/Art.svelte";
    import { mm2pix, styled } from "$lib/LayoutUtils";

    export let definition: ICard;
    $: css = {
        'gap': mm2pix(2)
    };
</script>

<main class="main-block" style={styled(css)}>
    <Art height={36} uri={definition.artUri} />
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