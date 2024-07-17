<script lang="ts">
    import { text } from "@sveltejs/kit";
import RichText from "./RichText.svelte";

    export let mainText: string | undefined;
    export let flavourText: string | undefined;
    export let cardType: string;
</script>

<div class="box">
    {#if mainText && flavourText}
        <div class="main round-top solid-top solid-bottom solid-sides">
            <RichText text={mainText}/>
        </div>
        <div class="type">{cardType}</div>
        <div class="flavour round-bottom solid-bottom solid-sides">
            <span>"{flavourText}"</span>
        </div>
    {:else if mainText}
      <div class="main round-top round-bottom solid-top solid-bottom solid-sides">
        <RichText text={mainText}/>
      </div>
      <div class="type">{cardType}</div>
    {:else}
        <div class="flavour round-top solid-top round-bottom solid-bottom solid-sides">
            <span>"{flavourText}"</span>
        </div>
        <div class="type">{cardType}</div>
    {/if}
</div>

<style lang="css">
    .flavour {
        position: relative;
        font-size: 12px;
        text-align: center;
        font-family: var(--alt-font-family);
        background: rgba(0, 0, 0, 0.03);
        flex-grow: 1;
        padding: 20px 0;
        white-space: pre-wrap;
    }

    .flavour>span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    
    .solid-top {
        border-top: var(--main-border);
    }

    .solid-sides {
        border-left: var(--main-border);
        border-right: var(--main-border);
    }

    .solid-bottom {
        border-bottom: var(--main-border);
    }

    .round-top {
        border-top-left-radius: var(--main-border-radius);
        border-top-right-radius: var(--main-border-radius);
    }

    .round-bottom {
        border-bottom-left-radius: var(--main-border-radius);
        border-bottom-right-radius: var(--main-border-radius);
    }

    .main {
        background-color: white;
        flex: 2;
        color: #000;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        padding: 10px;
        padding-bottom: 15px;
    }
    
    .box {
        background: rgba(30.0, 30.0, 30.0, 0.15);
        border-radius: 15px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .type {
        position: relative;
        margin: -9px auto;
        height: 15px;
        text-transform: uppercase;
        width: 180px;
        text-align: center;
        background-repeat: round;
        border: 1px solid black;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
        z-index: 1;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.0) 0%,
            rgba(0, 0, 0, 0.06) 44.06%,
            rgba(0, 0, 0, 0.30) 99.99%,
            rgba(0, 0, 0, 0.00) 100%
        ), rgba(223, 228, 234, 1);
    }
</style>