<script lang="ts">
    import type { Watermark } from "$lib/Watermark";
    export let watermark: Watermark;
    const uri = `watermarks/${watermark}.png`;
</script>

<div class="watermark" style='--uri: url("{uri}");'/>

<style>
    .watermark {
        background-image: var(--uri);
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-position: bottom;
        background-repeat: no-repeat;
    }
</style>