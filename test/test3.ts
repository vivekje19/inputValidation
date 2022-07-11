
import { validate } from "../validate.ts";
import {
  isNumber,
  isEmail,  
  maxLength,
  required,
  fixedLength,
  validateObject,
} from "../validationFunction.ts";



const inputs = {  
  name:"",
  contact:"988988h39"
};

type Person = {
  
  name: string;
  contact:string;

}

type address = {
  hn:number,
  addr?:string
}

type Vehicle = {
  model: string;
  make: string;
  year: number;
}


const rule = {
  name:[required],
  contact:[fixedLength({vl:10, msg:"contact no length should be 10"}), isNumber]
};



const requireKey = ['email'];

const errors  = await validate<Person>(inputs, rule);
//const [temp, err] = await validate<Vehicle>(inputs, rule);

console.log(errors);