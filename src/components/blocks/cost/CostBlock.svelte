<script lang="ts">
    import Start from "./start.svg?raw"
    import Link from "./link.svg?raw"
    import End from "./end.svg?raw"

    import type { IValue } from "../../../lib/Value";
    import Value from "../Value.svelte";

    export let costBlock: IValue[];
    export let type: "start" | "link" | "end";
</script>

<div class="box">
    <div class="block-background">
        {#if type === "start"}
            {@html Start}
        {:else if type === "link"}
            {@html Link}
        {:else}
            {@html End}
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