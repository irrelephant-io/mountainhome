import type { ICard } from "$lib/ICard"

const basePath = "data/cards";

export type CardIndex = string[];

export async function loadIndex(): Promise<CardIndex> {
    return await fetch(basePath + "/_index.json").then(it => it.json()) as CardIndex;
}

export async function loadCards(): Promise<ICard[]> {
    return await Promise.all(
        (await loadIndex()).map(loadCard)
    );
}

export async function loadCard(path: string): Promise<ICard> {
    return (await fetch(basePath + "/" + path).then(it => it.json())) as ICard;
}