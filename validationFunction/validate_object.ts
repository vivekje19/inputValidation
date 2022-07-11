import type { Validity, Rule } from "../types.ts";
import type {
  ValidationRules,
  InputData,
  InvalidPayload,
  RawValidationResult,
  InvalidParams
} from "../interfaces.ts";
import { invalid, checkRequiredValue } from "../utils.ts";
import { required } from "./required.ts";
import { checkRules, getValue } from "../validate.ts";

export function validateObject(
  isRequired: boolean,
  rules: ValidationRules,
): Rule[] {
  return [
    ...(isRequired ? [required] : []),
    async function validateObjectValue(
      value: any
    ): Promise<InvalidParams | undefined>  {
      if (isRequired === true && checkRequiredValue(value)) {
        return;
      }
      
      // Make sure value is object and not null
      if (typeof value !== "object" || value === null) {
        return ["Invalid Object"];
      }

      //const errors = await validateData(value as InputData, rules);

      const rawErrors: RawValidationResult = {};  

        for (let key in rules) {

          const value1: InputData = getValue(value, key);

          const errors: InvalidPayload[] = await checkRules(
            value1,
            rules[key]
          );          
          if (errors.length) {
            rawErrors[key] = errors;
          }
        }
       
        const passes = Object.keys(rawErrors).length === 0;  
        const errors = passes ? {} : rawErrors;
        return errors;
    },
  ];
}
