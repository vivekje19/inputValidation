import type {  Rule, ValidatorObj } from "./types.ts";
import type {
  ValidationOptions,
  RawValidationResult,
  InputData,
  InvalidPayload,
  InvalidParams
} from "./interfaces.ts";

import { defaultMessages } from "./messages.ts";


export const getValue = (input: InputData, key: string): any => {
  return input[key];
};



export const checkRules = async (
  value: InputData,
  rules: Rule[]
): Promise<InvalidPayload[]> => {
  const results = []; 
 
  for (let rule of rules) {
   
    let res = rule(value);

    if (res instanceof Promise) {

      res = await res;

    }

    if (res !== undefined) {
      results.push(res);
      if (res.implicit === true) {
        break;
      }
    }
  }
  return results;
};



export const validate =  async <T extends Record<string, unknown>>(
  input: T,
  rules: ValidatorObj<T>,
  options: ValidationOptions = {
    messages: defaultMessages,
  },
): Promise<any> => {
  
 
  const rawErrors: RawValidationResult = {};  

  for (let key in rules) {
    
    const value : InputData = getValue(input, key);
    const errors: InvalidPayload[] = await checkRules(
      value,
      rules[key]
    );
    if (errors.length) {
      rawErrors[key] = errors;
    }
  }

  const passes = Object.keys(rawErrors).length === 0;  
  
  const errors = passes ? {} : rawErrors;
  
  return  errors;
};
