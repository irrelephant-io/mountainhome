<script lang="ts">
    import { styled, url } from "$lib/LayoutUtils";
    import type { Watermark } from "$lib/Watermark";
    export let watermark: Watermark;

    $: css = {
        'image-uri': url(`/watermarks/${watermark}.png`)
    };
</script>

<div class="watermark" style={styled(css)}/>

<style>
    .watermark {
        background-image: var(--image-uri);
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-position: bottom;
        background-repeat: no-repeat;
    }
</style>