<script lang="ts">
    import type { ICard } from "$lib/ICard.js";
    import Card from "../../components/Card.svelte";
    import PreviewContext from "../../components/context/PreviewContext.svelte";

    let currentDefinition: ICard|null = {
        "title": "Dwarf Fortress",
        "type": "Unique Location",
        "artUri": "art/cards/buildings/unique/fortress.png",
        "layout": "normal",
        "watermark": "recurring",
        "mainText": "{kw:Effect} — Mushroom Wine adds an additional {r:booze=1}; When you discover a Dwarf, you may pay {r:booze=5} to put them into Drawf Fortress instead of bidding.{section}Pay {r:booze=3}: Put one of the Dwarves in the Fortress on top of the exploration pile.",
        "rarity": "normal",
        "flavourText": "Neither elves, nor goblins can ever hope to enter."
    };


    function update() {
        const editor = document.getElementById("json-card") as HTMLTextAreaElement;
        try {
            currentDefinition = JSON.parse(editor.value);
        }
        catch {
            currentDefinition = null;
        }
    }

    let currentJson = JSON.stringify(currentDefinition, null, 4);
</script>

<div class="box">
    <div class="text-editor">
        <textarea id="json-card" on:change={update} value={currentJson}/>
    </div>
    
    <PreviewContext>
        <div class="card-holder">
            {#if currentDefinition === null}
                <p style="color: red; font-size: 32px;">JSON error :C</p>
            {:else}
                <Card definition={currentDefinition} />
            {/if}
        </div>
    </PreviewContext>
</div>

<style>
    .box {
        display: flex;
        flex-direction: row;
    }

    .text-editor {
        width: 50%;
    }

    .text-editor>textarea {
        width: 100%;
        height: 100%;
        min-height: 800px;
    }

    .card-holder {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: center;
    }
</style>