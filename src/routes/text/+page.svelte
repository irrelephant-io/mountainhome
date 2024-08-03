<script lang="ts">
    import type { Watermark } from "$lib/Watermark";

    let text: string | undefined;
    let type: string = "<card type>";
    let flavour: string | undefined;
    let watermark: Watermark | undefined;
    
    import TextBox from "../../components/blocks/TextBox.svelte";

    function update() {
        text = (document.getElementById("text") as HTMLInputElement)?.value;
        type = (document.getElementById("type") as HTMLInputElement)?.value ?? "<no type>";
        flavour = (document.getElementById("flavour") as HTMLInputElement)?.value;
        const stringWatermark = (document.getElementById("watermark") as HTMLInputElement)?.value;

        if (stringWatermark === "none") {
            watermark = undefined;
        } else {
            watermark = stringWatermark as Watermark;
        }

        console.log(watermark);
    }

</script>

<label for="text">Main Text</label>
<textarea id="text" placeholder="text" on:change={() => update()}/>

<label for="type">Card Type</label>
<textarea id="type" placeholder="type" on:change={() => update()}/>

<label for="flavour">Flavour Text</label>
<textarea id="flavour" placeholder="flavour" on:change={() => update()}/>

<label for="watermark">Watermark</label>
<select id="watermark" on:change={() => update()}>
    <option value="none">None</option>
    <option value="recurring">Recurring</option>
    <option value="troll">Troll</option>
</select>
<p>Rendered text would be:</p>

<div style="width: 300px; height: 400px; border: 1px solid; padding: 10px; background: grey">
    <TextBox watermark={watermark} cardType={type} mainText={text} flavourText={flavour} rarity="normal"/>
</div>

