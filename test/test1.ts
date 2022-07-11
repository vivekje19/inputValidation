
import { validate } from "../validate.ts";
import {
  isNumber,
  isEmail,  
  required,
  fixedLength,
  validateObject,
} from "../validationFunction.ts";



const inputs = {  
  address:{
    hn:0,
    addr:"Testing"
  }
};

type Person = {
  
  address: address;
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
  
  address: 
    validateObject(true,{
       hn:[isNumber, fixedLength({length:18, msg:'House no length should be 18'})],
       addr:[required]
    })
  

};



const requireKey = ['email'];

const errors = await validate<Person>(inputs, rule);
//const [temp, err] = await validate<Vehicle>(inputs, rule);

console.log(errors);