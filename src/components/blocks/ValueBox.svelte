<script lang="ts">
    import type { IValue } from "../../lib/Value.ts";
    export let value: IValue;
    import Value from "./Value.svelte";
</script>

<div class="box">
    <div class="box-content">
        <Value value={value} style="big" />
    </div>
</div>

<style>
    .box {
        width: 44px;
        height: 44px;
        background-color: #DFE4EA;
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 2;
        border-radius: 20px 5px;
        border: 1px solid #000;
        background: linear-gradient(
            218deg,
            rgba(0, 0, 0, 0.00) 0%,
            rgba(0, 0, 0, 0.08) 44.06%,
            rgba(0, 0, 0, 0.40) 99.99%,
            rgba(0, 0, 0, 0.00) 100%
        ), #DFE4EA;
    }

    .box-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>