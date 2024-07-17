<script lang="ts">
    import type { ICard } from "$lib/ICard.js";
    import Card from "../../components/Card.svelte";

    let currentDefinition: ICard|null = {
        "title": "Dwarf Fortress",
        "type": "Building - Unique",
        "artUri": "/art/dwarf-fortress.png",
        "layout": "normal",
        "rarity": "normal",
        "mainText": "Place the dwarf fortress blueprint next to the exploration pile - anyone can construct it and it belongs to no one. If you explore to find a dwarf, you may place them in the fortress. If the fortress is exhausted, the dwarf flees back into the exploration pile.",
        "flavourText": "Some dwarves are just too powerful to be allowed to roam the lands of Rotheim. Thankfully, exile in a lavish fort is not such a terrible fate.",
        "value": { "resource": "vp", "value": 4 },
        "cost": [
            [ { "resource": "rocks", "value": 3 }, { "resource": "booze", "value": 2 } ],
            [ { "resource": "rocks", "value": 3 }, { "resource": "shinies", "value": 2 } ],
            [ { "resource": "rocks", "value": 3 }, { "resource": "shinies", "value": 2 } ],
        ]
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
    
    <div class="card-holder">
        {#if currentDefinition === null}
            <p style="color: red; font-size: 32px;">JSON error :C</p>
        {:else}
            <Card definition={currentDefinition} />
        {/if}
    </div>
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