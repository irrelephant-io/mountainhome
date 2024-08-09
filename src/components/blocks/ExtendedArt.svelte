<script lang="ts">
    import { makeAbsolute } from "$lib/UrlUtils";

    export let uri: string | undefined;
</script>

<div class="art" style='--uri: url("{makeAbsolute(uri)}");'/>

<style lang="css">
    :root {
        --extended-art-height-mm: 55;
        --extended-art-height: calc(var(--extended-art-height-mm) * var(--dpi-factor) * 1px);
    }

    .art {
        background: var(--uri);
        position: relative;
        background-repeat: round;
        height: var(--extended-art-height);
        background-size: cover;
    }
</style>
