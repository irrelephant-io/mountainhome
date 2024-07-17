<script lang="ts" context="module">
    type ComponentDescriptor = {
        type: "resource" | "newline" | "unknown",
        props?: any
    };

    const specialBlockSyntaxPattern = /{(?<type>r|n):?(?<desc>(?<spec>\w+)=(?<value>\w)+)?}/gm;

    function getSpecialComponentDescriptor(match: RegExpExecArray): ComponentDescriptor {
        if (match.groups!["type"] === "r") {
            return {
                type: "resource",
                props: {
                    style: "small",
                    value: { resource: match.groups!["spec"], value: match.groups!["value"] }
                }
            };
        }

        if (match.groups!["type"] == "n") {
            return {
                type: "newline"
            }
        }

        return { type: "unknown" };
    }
</script>

<script lang="ts">
    import Value from "./Value.svelte";

    export let text: string;

    const parts: (string|ComponentDescriptor)[] = [];
    let lastIndex = 0;

    Array.from(text.matchAll(specialBlockSyntaxPattern))
        .forEach(match => {
            parts.push(text.substring(lastIndex, match.index).trim());
            parts.push(getSpecialComponentDescriptor(match));
            lastIndex = match.index + match[0].length;
        });
    
    parts.push(text.substring(lastIndex));

    console.log(parts);
</script>

{#each parts as component}
    {#if typeof(component) === "string"}
        <span class="text-bit">{component}</span>
    {:else if component.type === "resource"}
        <div class="icon-holder"><Value {...component.props}/></div>
    {:else if component.type === "newline"}
        <br/>
    {:else}
        <span style="color: red; font-weight: bold">"-Unknown rich text component-"</span>
    {/if}
{/each}

<style>
    .icon-holder {
        top: -3px;
        height: 15px;
        padding: 0 3px 0 3px;
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }

    .text-bit {
        font-family: var(--main-font-family);
    }

</style>
