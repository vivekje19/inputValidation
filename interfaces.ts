import type { Rule, MessageFunction, Validity } from "./types.ts";

export interface ValidationRules {
  [key: string]: Rule[];
}

export interface InvalidParams {
  [key: string]: any;
}

export interface InvalidPayload {
  rule: string;
  params: InvalidParams;
  implicit: boolean;
}

export interface OptionalValidity extends InvalidPayload {
  noContext: boolean;
}

export interface InputData {
  [key: string]: any;
}

export interface ValidationMessages {
  [key: string]: MessageFunction | string;
}


// simple Record<string, string>
export interface ValidationAttributes {
  [key: string]: string;
}



export interface RawValidationResult {
  [key: string]: InvalidPayload[] | RawValidationResult | RawValidationResult[];
}

export interface ValidationOptions {
  messages?: ValidationMessages;
  attributes?: ValidationAttributes;
}


