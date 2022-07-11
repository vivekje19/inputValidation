import type { Validity, Rule } from "../types.ts";
import { invalid, checkRequiredValue } from "../utils.ts";

export function fixedLength(fixedLength: {length:number,msg?:string}): Rule {
  return function maxLengthRule(value: any): any {
    if (value.length !== fixedLength.length) {
      if(checkRequiredValue(fixedLength.msg)){
        return `Length should be ${fixedLength.length}`;
      }else{
        return fixedLength.msg;
      }      
      
    }
  };
}
