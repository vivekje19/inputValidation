
import { validate } from "../validate.ts";
import {
  isNumber,
  isEmail,  
  required,
  fixedLength
} from "../validationFunction.ts";



const inputs = {
  name: "Vivek",
  contactNo: "988988753",
  email:"vb@gh.lop"
};

type Person = {
  name: string;
  contactNo: string;
  email?: string;
}



type Vehicle = {
  model: string;
  make: string;
  year: number;
}


const rule = {
  name: [],
  contactNo: [isNumber, fixedLength({vl:10,error:""})],
  email:[isEmail]

};

const requireKey = ['email'];

const [ passes, errors ] = await validate<Person>(inputs, rule);
//const [temp, err] = await validate<Vehicle>(inputs, rule);

console.log(errors);