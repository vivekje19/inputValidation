import type { Rule, MessageFunction, Validity } from "./types.ts";
import type {
  InvalidParams,
  InvalidPayload,
  RawValidationResult,
  ValidationOptions,
  ValidationMessages,
  InputData,
  OptionalValidity,
} from "./interfaces.ts";
import { required } from "./validationFunction/required.ts";


export function invalid(
  rule: string,
  params: InvalidParams = {},
  implicit = false,
): InvalidPayload {  
  return { rule, params, implicit };
}



export const isStringInt = (value: string): boolean => {
  return value.match(/^\d+$/) ? true : false;
};



export function checkRequiredValue(value: any): boolean {
  return value === undefined || value === null || value === "";
}




export const getCheckType = (rule: string): string => {
  const split = rule.split(":");
  split.shift();

  return split.join(":");
};

export const findBestMessage = (
  messages: ValidationMessages,
  key: string,
  ruleName: string,
  ruleKey: string,
  defaultMessage: string | MessageFunction,
): string | MessageFunction => {
  
  return (
    messages[`${key}.${ruleName}`] ||
    messages[`${key}.${ruleKey}`] ||
    messages[key] ||
    messages[ruleName] ||
    messages[ruleKey] ||
    defaultMessage
  );
};



export const getValue = (input: InputData, key: string): any => {
  if (typeof input[key] !== "undefined") {
    return input[key];
  }

  const paths = key.split(".");
  const value = paths.reduce(
    (data: any, path: string): any => {
      if (data && typeof data === "object") {
        return data[path];
      } else if (data instanceof Array && isStringInt(path)) {
        const index = parseInt(path);
        return data[index];
      }
    },
    { ...input },
  );

  return value;
};

export const hasValue = (input: InputData, key: string): boolean => {
  const value = getValue(input, key);
  return typeof value !== "undefined";
};