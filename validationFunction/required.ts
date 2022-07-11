import type { Validity } from "../types.ts";
import { invalid, checkRequiredValue } from "../utils.ts";

export function required(value: any): any {
    return checkRequiredValue(value)
    ? "This field is required"
    : undefined;
}
