<script lang="ts">
    import type { IconType } from "$lib/Icon";
    import { mm2pix, styled, url } from "$lib/LayoutUtils";
    import { makeAbsolute } from "$lib/UrlUtils";

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

    $: css = {
        'width': mm2pix(size),
        'height': mm2pix(typographicHeight),
        'icon-uri': url(iconLookup[type])
    };
</script>

<div class="icon-holder" style={styled(css)}>
    <div class="icon" />
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
            background-image: var(--icon-uri);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            width: var(--width);
            height: var(--width);
        }
    }
    
</style>