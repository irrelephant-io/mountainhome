<script lang="ts" context="module">
    import type { IValue } from "../../lib/Value.ts";
    export type ValueStyle = "big" | "small";


</script>

<script lang="ts">
    import Icon from "./Icon.svelte";

    export let value: IValue;
    export let style: ValueStyle = "small";
</script>

<div class="box {style}">
    <Icon type={value.resource} size={style == "small" ? 3 : 6}></Icon>
    {#if value.value !== '_'}
        <span class="value {style}">{value.value}</span>
    {/if}
</div>

<style lang="css">
    :root {
        --large-value-size-mm: 7.2;
        --small-value-size-mm: 3.8;
        --large-text-size-mm: 3.2;
        --small-text-size-mm: 2.2;

        --large-value-size: calc(var(--large-value-size-mm) * var(--dpi-factor) * 1px);
        --small-value-size: calc(var(--small-value-size-mm) * var(--dpi-factor) * 1px);
    }
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