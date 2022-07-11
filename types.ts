import type {
  
  InvalidPayload,
  InvalidParams,
} from "./interfaces.ts";

export type OptionalValue = null | undefined | "";

export type Validity = InvalidPayload | undefined;

export type Rule = (
  value: any
) => Validity | Promise<Validity>;

export type lp = {
  value:{
    value:Array<Rule>
  }
}


export type MessageFunction = (
  params: InvalidParams,
  checkType: string,
) => string;


// export type PrimitiveTypes =
//   | null
//   | boolean
//   | string
//   | number
//   | undefined
//   | Symbol;

//type ValidatorFn = (...unknown) => Validity | Promise<Validity>;


export type ValidatorObj<T> = Record<keyof T,any>;