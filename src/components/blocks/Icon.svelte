<script lang="ts">
    import type { IconType } from "$lib/Icon";

    export let size: number;
    export let typographicHeight: number = size;
    export let type: IconType;

    const iconLookup = {
        "vp": `${document.baseURI}icons/vp.png`,
        "shinies": `${document.baseURI}icons/shinies.png`,
        "rocks": `${document.baseURI}icons/rock.png`,
        "mixed": `${document.baseURI}icons/mixed.png`,
        "booze": `${document.baseURI}icons/booze.png`,
        "dwarf": `${document.baseURI}icons/unknown.png`,
        "tap": `${document.baseURI}icons/unknown.png`
    };
</script>

<div class="icon-holder" style="--width-mm: {size}; --height-mm: {typographicHeight};">
    <div class="icon" style="--icon: url('{iconLookup[type]}');" />
</div>

<style>
    .icon-holder {
        --width: calc(var(--width-mm) * var(--dpi-factor) * 1px);
        --height: calc(var(--height-mm) * var(--dpi-factor) * 1px);
        --size: calc(var(--size-mm) * var(--dpi-factor) * 1px);

        position: relative;
        width: var(--width);
        height: var(--height);

        & .icon {
            position: absolute;
            display: inline-block;
            background: var(--icon) no-repeat center;
            background-size: contain;
            width: var(--width);
            height: var(--height);
        }
    }
    
</style>