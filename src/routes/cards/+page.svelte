<script lang="ts">
    import type { ICard } from "../../lib/ICard.js";
    import Card from "../../components/Card.svelte";

    const rocks: ICard = {
        "title": "Mossy Rocks of Jonathan Cat the III",
        "type": "Treasure - Cat Poopoo",
        "artUri": "/art/rocks-1.png",
        "layout": "extendedArt",
        "rarity": "normal",
        "mainText": "Gain 3 rocks and draw one card. If you do, gross out your friends. Ew....",
        "flavourText": "A few very dry rocks of cat poopoo. Not recommended for building with. \n- Big Billy, the Barbarian Cat",
        "value": {
            "resource": "booze",
            "value": 69
        }
    };

    const dwarfFortress: ICard = {
        "title": "Dwarf Fortress",
        "type": "Building - Unique",
        "artUri": "/art/dwarf-fortress.png",
        "layout": "normal",
        "rarity": "normal",
        "mainText": "Place the dwarf fortress blueprint next to the exploration pile - anyone can construct it and it belongs to no one. If you explore to find a dwarf, you may place them in the fortress. If the fortress is exhausted, the dwarf flees back into the exploration pile.",
        "flavourText": "Some dwarves are just too powerful to be allowed to roam the lands of Rotheim. Thankfully, exile in a lavish fort is not such a terrible fate.",
        "value": { "resource": "vp", "value": 4 },
        "cost": [
            [ { "resource": "rocks", "value": 3 }, { "resource": "booze", "value": 2 } ],
            [ { "resource": "rocks", "value": 3 }, { "resource": "shinies", "value": 2 } ],
            [ { "resource": "rocks", "value": 3 }, { "resource": "booze", "value": 2 } ],
            [ { "resource": "rocks", "value": 3 }, { "resource": "booze", "value": 2 } ],
            [ { "resource": "rocks", "value": 3 }, { "resource": "shinies", "value": 2 } ],
        ]
    };

    
    const dwarfFortressNoMain: ICard = {
        "title": "Dwarf Fortress",
        "type": "Building - Unique",
        "artUri": "/art/dwarf-fortress.png",
        "layout": "normal",
        "rarity": "normal",
        "flavourText": "Some dwarves are just too powerful to be allowed to roam the lands of Rotheim. Thankfully, exile in a lavish fort is not such a terrible fate.",
        "value": {
            "resource": "shinies",
            "value": "x"
        },
        "cost": [
            [ { "resource": "rocks", "value": 3 }, { "resource": "booze", "value": 2 } ],
            [ { "resource": "rocks", "value": 3 }, { "resource": "shinies", "value": 2 } ],
            [ { "resource": "vp", "value": 3 }, { "resource": "booze", "value": 10 }  ]
        ]
    };

    const dwarfFortressNoFlavour: ICard = {
        "title": "Dwarf Fortress",
        "type": "Building - Unique",
        "artUri": "/art/dwarf-fortress.png",
        "layout": "normal",
        "rarity": "normal",
        "mainText": "{booze=1}: Test your might!\nSome dwarves are just too powerful to be allowed to roam the lands of Rotheim. Thankfully, exile in a lavish fort is not such a terrible fate.",
        "value": {
            "resource": "booze",
            "value": 4
        }
    };
</script>

<Card cardDefinition={rocks} />
<Card cardDefinition={dwarfFortress} />
<Card cardDefinition={dwarfFortressNoMain} />
<Card cardDefinition={dwarfFortressNoFlavour} />