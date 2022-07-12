import type {
  
  InvalidPayload,
  InvalidParams,
} from "./interfaces.ts";

export type OptionalValue = null | undefined | "";

export type Validity = InvalidPayload | undefined;

export type Rule = (
  value: any
) => Validity | Promise<Validity>;



export type ValidationResult = [boolean, InvalidParams];

export type MessageFunction = (
  params: InvalidParams,
  checkType: string,
) => string;

export type ValidatorObj<T> = Record<keyof T,any>;