<script lang="ts">
    import { mm2pix, styled, url } from "$lib/LayoutUtils";
    export let uri: string | undefined;
    export let height: number;

    $: css = {
        'height': mm2pix(height),
        'border-radius': mm2pix(2.5),
        'art-uri': url(uri!)
    };
</script>


<div class="art" style={styled(css)}/>

<style lang="css">
    .art {
        background: var(--art-uri);
        position: relative;
        background-repeat: round;
        height: var(--height);
        background-size: cover;
        flex-shrink: 0;
        border-radius: var(--border-radius);
        border: var(--main-border);
    }
</style>
