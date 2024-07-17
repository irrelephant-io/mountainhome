<script lang="ts">
    import StartNormal from "./start-normal.svg?raw"
    import LinkNormal from "./link-normal.svg?raw"
    import EndNormal from "./end-normal.svg?raw"

    import StartRare from "./start-rare.svg?raw"
    import LinkRare from "./link-rare.svg?raw"
    import EndRare from "./end-rare.svg?raw"

    import type { IValue } from "../../../lib/Value";
    import Value from "../Value.svelte";
    import type { Rarity } from "$lib/Rarity";

    export let costBlock: IValue[];
    export let rarity: Rarity;
    export let type: "start" | "link" | "end";
</script>

<div class="box">
    <div class="block-background">
        {#if rarity === "normal"}
            {#if type === "start"}
                {@html StartNormal}
            {:else if type === "link"}
                {@html LinkNormal}
            {:else}
                {@html EndNormal}
            {/if}
        {:else}
            {#if type === "start"}
                {@html StartRare}
            {:else if type === "link"}
                {@html LinkRare}
            {:else}
                {@html EndRare}
            {/if}
        {/if}
    </div>
    <div class="block-foreground">
        {#each costBlock as element}
        <Value value={element} style="small" />
    {/each}
    </div>
</div>


<style lang="css">
    .box {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 63px;
        margin-right: -10px;
        height: 25px;
    }
    
    .block-background {
        position: absolute;
        height: 25px;
    }

    .block-foreground {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -2px;
        display: flex;
        justify-content: center;
    }
    
</style>