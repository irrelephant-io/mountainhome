import type { IValue } from "./Value";
import type { LayoutType } from "./LayoutType";
import type { Rarity } from "./Rarity";
import type { Cost } from "./Cost";

export interface ICard {
    title: string,
    mainText?: string;
    artUri: string;
    type: string,
    layout: LayoutType,
    rarity: Rarity,
    flavourText?: string
    value: IValue,
    cost?: Cost
}