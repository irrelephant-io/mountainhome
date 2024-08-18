<script lang="ts">
    import { setContext } from "svelte";
    setContext('targetDpi', 300);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" crossorigin="anonymous" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Donegal+One&family=Farsan&display=swap" rel="stylesheet">

<slot/>