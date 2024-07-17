<script context="module" lang="ts">
    import Value from "../../components/blocks/Value.svelte";
</script>

<div style="height: 100px;">
    <Value value={{ "resource": "booze", "value": 12 }} style="small"/>
    <Value value={{ "resource": "mixed", "value": 12 }} style="small"/>
    <Value value={{ "resource": "booze", "value": 3 }} style="small"/>
</div>


<div style="height: 100px;">
    <Value value={{ "resource": "shinies", "value": 12 }} style="small"/>
    <Value value={{ "resource": "shinies", "value": 3 }} style="small"/>
</div>

<div style="height: 100px;">
    <Value value={{ "resource": "rocks", "value": 12 }} style="small"/>
    <Value value={{ "resource": "rocks", "value": 3 }} style="small"/>
</div>

<div style="height: 100px;">
    <Value value={{ "resource": "vp", "value": 12 }} style="small"/>
    <Value value={{ "resource": "vp", "value": 3 }} style="small"/>
</div>

<div style="height: 100px;">
    <Value value={{ "resource": "booze", "value": 12 }} style="big"/>
</div>