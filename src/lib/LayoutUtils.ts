import { getContext } from "svelte";
import { makeAbsolute } from "./UrlUtils";

const mmPerInch = 25.4;

export function mm2pix(mm: number): string {
    const dpi: number = getContext('targetDpi');
    if (!dpi) {
        throw new Error("DPI not set! Make sure to render the components in either Print or Preview context!");
    }
    return `${mm2pixValue(mm, dpi)}px`;
}

export function mm2pixValue(mm: number, targetDpi: number): number {
    return mm * targetDpi / mmPerInch;
}

export function url(url: string): string {
    return `url('${makeAbsolute(url)}')`;
}

export function styled(styles: any): string {
    return Object
        .entries(styles)
        .map(([k, v]) => `--${k}:${v}`)
        .join(';');
}