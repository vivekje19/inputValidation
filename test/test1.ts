
import { validate } from "../validate.ts";
import {
  isNumber,
  isEmail,  
  required,
  fixedLength,
  validateObject,
} from "../validationFunction.ts";

import {
  assert,
  assertEquals,
  assertThrows,
  assertNotEquals
} from "https://deno.land/std@0.128.0/testing/asserts.ts";


const inputs = {  
  address:{
    pincode:0,
    landmark:"Testing",
    contact:{
      primary: "9889887538"
    }
  }
};

const inpt = {  
  address:{
    pincode:221302,
    landmark:" Tes  1 ",
    contact:{
      primary: "9889887538",
      secondary:"9971698604"
    }
  },
  email:"sfdfsd@gmail.com"
};

type Person = {  
  address: address;
  email?:string
}

type address = {
  pincode:number,
  landmark?:string,
  contact:{
    primary:string,
    secondary?:string
  }
}



const rule = {  
  address: 
  validateObject(true,{
   pincode:[isNumber(), fixedLength({length:6, msg:'Pin code length should be 6'})],
   landmark:[required, fixedLength({length:6})],
   contact:validateObject(true,{
    primary:[isNumber(), fixedLength({length:10, msg:'Primary contact length should be 6'})],
    secondary:[isNumber(), fixedLength({length:10})],
   })
  }),
  email:[required, isEmail("Invalid Email-ID")]
};



Deno.test("Test input validation", async () => {
  await validate<Person>(inputs, rule);
});

Deno.test("Test, validate input, if there is error", async () => {
  const [passes, errors] = await validate<Person>(inputs, rule);
  assertEquals(passes,false);
});

Deno.test("Test, validate input, if there is no error", async () => {
  const [passes, errors] = await validate<Person>(inpt, rule);
  assertNotEquals(passes,false);
});