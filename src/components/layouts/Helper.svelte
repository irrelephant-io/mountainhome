<script lang="ts">
    import type { ICard } from "../../lib/ICard";
    import RichText from "../blocks/RichText.svelte";

    export let definition: ICard;
</script>

<main class="main-block">
    <h1 class="title">{definition.title}</h1>
    <RichText text={definition.mainText ?? "???"}/>
</main>

<style>
    h1.title {
        padding: 10%;
        font-size: 17px;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
    }

    main {
        padding: 0 3%;
        font-size: 15px;
        text-align: center;
    }
</style>