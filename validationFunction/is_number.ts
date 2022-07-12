import type { Validity, Rule } from "../types.ts";
import { checkRequiredValue } from "../utils.ts";

export function isNumber(msg?:string): Rule {
  return function validateNumber(value: any): any {
    const reg = new RegExp('^[0-9]+$');
    if (!reg.test((value)) && value !== '') {
      if(checkRequiredValue(msg)){
        return "Should be integer";
      }else{
        return msg;
      }  
    }
  }
}
