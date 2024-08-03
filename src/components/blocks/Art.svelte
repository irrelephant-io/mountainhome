<script lang="ts">
    export let uri: string | undefined;
</script>


<div class="art" style='--uri: url("{uri}");'/>

<style lang="css">
    .art {
        background: var(--uri);
        position: relative;
        background-repeat: round;
        height: 190px;
    }
</style>
