import type { Validity, Rule } from "../types.ts";
import { checkRequiredValue } from "../utils.ts";

export function fixedLength(fixedLength: {length:number,msg?:string}): Rule {
  return function maxLengthRule(value: any): any {    
    if (String(value).trim().length !== fixedLength.length) {
      if(checkRequiredValue(fixedLength.msg)){
        return `Length should be ${fixedLength.length}`;
      }else{
        return fixedLength.msg;
      }      
      
    }
  };
}
