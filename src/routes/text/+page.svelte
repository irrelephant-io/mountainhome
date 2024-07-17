<script lang="ts">
    let text: string | undefined;
    let type: string = "<card type>";
    let flavour: string | undefined;

    import TextBox from "../../components/blocks/TextBox.svelte";

    function update() {
        text = (document.getElementById("text") as HTMLInputElement)?.value;
        type = (document.getElementById("type") as HTMLInputElement)?.value ?? "<no type>";
        flavour = (document.getElementById("flavour") as HTMLInputElement)?.value;

        console.log(flavour);
    }
</script>

<textarea id="text" placeholder="text" on:change={() => update()}/>
<textarea id="type" placeholder="type" on:change={() => update()}/>
<textarea id="flavour" placeholder="flavour" on:change={() => update()}/>

<p>Rendered text would be:</p>

<div style="width: 300px; height: 400px; border: 1px solid; padding: 10px; background: grey">
    <TextBox cardType={type} mainText={text} flavourText={flavour}/>
</div>

