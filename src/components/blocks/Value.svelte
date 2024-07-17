<script lang="ts" context="module">
    import type { IValue } from "../../lib/Value.ts";
    export type ValueStyle = "big" | "small";

    const iconLookup = {
        "vp": "/icons/vp.png",
        "shinies": "/icons/shinies.png",
        "rocks": "/icons/rock.png",
        "mixed": "/icons/mixed.png",
        "booze": "/icons/booze.png"
    };
</script>

<script lang="ts">
    export let value: IValue;
    export let style: ValueStyle = "small";

    function getIcon(value: IValue): string {
        const result = iconLookup[value.resource];
        return result || "/icons/unknown.png";
    }

</script>

<div class="box {style}">
    <div class="icon {style}" style="--icon: url('{getIcon(value)}')" />
    {#if value.value !== '_'}
        <span class="value {style}">{value.value}</span>
    {/if}
</div>

<style lang="css">
    .box {
        display: inline-block;
        position: relative;

        &.big {
            width: 38px;
            height: 38px;
        }

        &.small {
            width: 20px;
            height: 20px;
        }
    }

    .icon {
        position: absolute;
        left: 50%;
        top: 50%;
        display: inline-block;
        background: var(--icon) no-repeat center;
        background-size: contain;

        &.small {
            width: 14px;
            height: 14px;
            transform: translate(-65%, -40%);
        }

        &.big {
            width: 28px;
            height: 28px;
            transform: translate(-50%, -40%);
        }
    }

    .value {
        position: absolute;
        font-family: 'Farsan';
        font-weight: bold;
        position: absolute;
        transform: translate(-5%, -5%);
        top: 0;
        right: 0;

        &.small {
           font-size: 12px;
        }

        &.big {
            font-size: 17px;
        }
    }
</style>