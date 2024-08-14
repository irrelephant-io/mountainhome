<script lang="ts">
    import type { IconType } from "$lib/Icon";

    export let size: number;
    export let typographicHeight: number = size;
    export let type: IconType;

    const iconLookup = {
        "vp": "icons/vp.png",
        "shinies": "icons/shinies.png",
        "rocks": "icons/rock.png",
        "mixed": "icons/mixed.png",
        "booze": "icons/booze.png",
        "dwarf": "icons/dwarf.png",
        "tap": "icons/tap.png"
    };
</script>

<div class="icon-holder" style="--width-mm: {size}; --height-mm: {typographicHeight};">
    <div class="icon" style="--icon: url('{window.location.origin}/{iconLookup[type]}');" />
</div>

<style>
    .icon-holder {
        --width: calc(var(--width-mm) * var(--dpi-factor) * 1px);
        --height: calc(var(--height-mm) * var(--dpi-factor) * 1px);

        position: relative;
        width: var(--width);
        height: var(--height);

        & .icon {
            position: absolute;
            display: inline-block;
            background: var(--icon) no-repeat center;
            background-size: contain;
            width: var(--width);
            height: var(--width);
        }
    }
    
</style>