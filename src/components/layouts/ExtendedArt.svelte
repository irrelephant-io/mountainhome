<script lang="ts">
    import type { ICard } from "../../lib/ICard";
    import Art from "../blocks/Art.svelte";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";

    export let definition: ICard;
</script>

<main class="main-block">
    <Art uri={definition.artUri} style="extended"/>
    <CardTitle
        title={definition.title}
        rarity={definition.rarity}
    />
    <TextBox
        mainText={definition.mainText}
        flavourText={definition.flavourText}
        cardType={definition.type}
        rarity={definition.rarity}
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

