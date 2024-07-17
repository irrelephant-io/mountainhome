export type ResourceType = "rocks" | "shinies" | "booze" | "vp" | "mixed";

export interface IValue {
    resource: ResourceType,
    value: number | "x" | "_"
}