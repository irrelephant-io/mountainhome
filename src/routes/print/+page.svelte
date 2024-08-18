<script lang="ts">
    import { loadCard, loadIndex, type CardIndex } from "$lib/api/CardLibrary";
    import type { ICard } from "$lib/ICard";
    import { mm2pix, mm2pixValue, styled } from "$lib/LayoutUtils";
    import domtoimage from 'dom-to-image';
    import FileSaver from 'file-saver';
    import { onMount } from "svelte";
    import Card from "../../components/Card.svelte";
    import PrintContext from "../../components/context/PrintContext.svelte";

    let cardIndex: CardIndex = [];
    let selectedCard: string|undefined = undefined;
    let card: ICard|undefined = undefined;
    
    const printDpi = 300;
    $: printStyles = {
        'target-dpi': printDpi
    }

    $: selectedCard === undefined
        ? undefined
        : loadCard(selectedCard).then(loaded => card = loaded);

    onMount(async () => {
        cardIndex = await loadIndex();
    });

    async function exportImage() {
        const targetElement = document.getElementById("export");
        const blob = await domtoimage.toBlob(targetElement!, {
            width: mm2pixValue(63.5, printDpi),
            height: mm2pixValue(88.9, printDpi)
        });
        const fileName = card!.title.toLocaleLowerCase()
            .replaceAll(' ', '-')
            .replaceAll('\'', '');

        FileSaver.saveAs(blob, `${fileName}.png`);
    }
</script>

{#if cardIndex.length > 0}
    <select bind:value={selectedCard}>
        {#each cardIndex as path}
            <option value={path}>{path}</option>
        {/each}
    </select>
    <button on:click={exportImage}>Print</button>

    <div id="export" style="{styled(printStyles)}">
        {#if card !== undefined}
            <PrintContext>
                <Card definition={card}/>
            </PrintContext>
        {:else}
            <span>Loading preview...</span>
        {/if}
    </div>
{:else}
    <p>Loading index...</p>
{/if}
