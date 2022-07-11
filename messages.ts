import type { ValidationMessages } from "./interfaces.ts";

export const defaultMessages: ValidationMessages = {
  
  isBool: ":attr must be a boolean",
  isEmail: ":attr is not a valid email address",  
  isNumber: ":attr must be a number",
  minLength: ":attr cannot be lower than :minValue characters",
  maxLength: ":attr cannot be higher than :maxValue characters",
  fixedLength: ":attr length should be :fixedLength",
  required: ":attr is required",
  default: ":attr is invalid",
};
