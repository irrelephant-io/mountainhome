<script lang="ts">
    import { makeAbsolute } from "$lib/UrlUtils";

    export let uri: string | undefined;
</script>


<div class="art" style='--uri: url("{makeAbsolute(uri)}");'/>

<style lang="css">
    :root {
        --art-height-mm: 36;
        --art-height: calc(var(--art-height-mm) * var(--dpi-factor) * 1px);
    }

    .art {
        background: var(--uri);
        height: var(--art-height);
        position: relative;
        background-repeat: round;
        background-size: cover;
    }
</style>
