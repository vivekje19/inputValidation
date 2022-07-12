import type { Rule } from "../types.ts";
import { checkRequiredValue } from "../utils.ts";

export function isEmail(msg?: string): Rule {
  return function validateEmail(value: any): any {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (typeof value !== "string" || !regex.test(value.toLowerCase())) {
      if(checkRequiredValue(msg)){
        return "Invalid email-id";
      }else{
        return msg;
      }
    }
  }
}
