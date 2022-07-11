import type { Validity } from "../types.ts";
import { invalid } from "../utils.ts";

export function isNumber(value: any): any {
  
  const reg = new RegExp('^[0-9]+$');
  if (!reg.test((value)) && value !== '') {
    return "Shoud be integer";
  }
}
