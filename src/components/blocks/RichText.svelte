<script lang="ts" context="module">
    type ComponentDescriptor = {
        type: "resource" | "newline" | "keyword" | "icon" | "section" | "unknown",
        props?: any
    };

    const specialBlockSyntaxPattern = /{(?<type>r|n|section|kw|R|i):?(?<desc>(?<spec>(\w|\s)+)(=(?<value>[\w\+]+))?)?}/gm;

    function getSpecialComponentDescriptor(match: RegExpExecArray): ComponentDescriptor {
        const type = match.groups!["type"];
        if (type === "r" || type === "R") {
            return {
                type: "resource",
                props: {
                    style: type === "r" ? "small" : "big",
                    value: { resource: match.groups!["spec"], value: match.groups!["value"] }
                }
            };
        }

        if (type == "n") {
            return {
                type: "newline"
            }
        }

        if (type == "section") {
            return {
                type: "section"
            }
        }

        if (type == "kw") {
            return {
                type: "keyword",
                props: {
                    word: match.groups!["spec"]
                }
            }
        }

        if (type == "i") {
            const sizeGroup = match.groups!["value"];
            const [ size, typographicHeight ] = sizeGroup.split("x");
            
            return {
                type: "icon",
                props: {
                    type: match.groups!["spec"],
                    size,
                    typographicHeight
                }
            }
        }

        return { type: "unknown" };
    }
</script>

<script lang="ts">
    import { mm2pix, styled } from "$lib/LayoutUtils";
    import Icon from "./Icon.svelte";
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

    $: css = {
        'section-break-height': mm2pix(0.7)
    }
</script>

<div style={styled(css)}>
    {#each parts as component}
        {#if typeof(component) === "string"}
            <span class="text-bit">{component}</span>
        {:else if component.type === "resource"}
            <div class="icon-holder"><Value {...component.props}/></div>
        {:else if component.type === "keyword"}
            <span class="keyword">{component.props.word} </span>
        {:else if component.type === "newline"}
            <br/>
        {:else if component.type === "icon"}
            <div class="icon-holder"><Icon {...component.props}/></div>
        {:else if component.type === "section"}
            <br/>
            <div class="section-break"></div>
        {:else}
            <span style="color: red; font-weight: bold">"-Unknown rich text component-"</span>
        {/if}
    {/each}
</div>

<style>
    .icon-holder {
        top: -3px;
        height: 15px;
        padding: 0 3px 0 3px;
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }

    .section-break {
        height: var(--section-break-height);
    }

    .text-bit {
        font-family: var(--main-font-family);
    }

    .keyword {
        font-style: italic;
    }

</style>
