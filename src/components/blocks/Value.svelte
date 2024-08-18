<script lang="ts" context="module">
    export type ValueStyle = "big" | "small";
</script>

<script lang="ts">
    import type { IValue } from "../../lib/Value.ts";
    import { mm2pix, styled } from "$lib/LayoutUtils";
    import Icon from "./Icon.svelte";

    export let value: IValue;
    export let style: ValueStyle = "small";
    
    $: css = {
        'large-value-size': mm2pix(7.2),
        'mall-value-size': mm2pix(3.8),
        'small-text-size': mm2pix(2.2),
        'large-text-size': mm2pix(3.2)
    };
</script>

<div class="box {style}" style="{styled(css)}">
    <Icon type={value.resource} size={style == "small" ? 3 : 6}></Icon>
    {#if value.value !== '_'}
        <span class="value {style}">{value.value}</span>
    {/if}
</div>

<style lang="css">
    .value {
        position: absolute;
        font-family: 'Farsan';
        font-weight: bold;
        position: absolute;
        top: -20%;
        right: 0;
        font-weight: bold;
        &.small {
           font-size: calc(var(--small-text-size-mm) * var(--dpi-factor) * 1px);
        }

        &.big {
            font-size: calc(var(--large-text-size-mm) * var(--dpi-factor) * 1px);
        }
    }
</style>