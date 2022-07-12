import {
  assert,
  assertEquals,
  assertThrows,
  assertNotEquals
} from "https://deno.land/std@0.128.0/testing/asserts.ts";

import {  
  isNumber
} from "../validationFunction.ts";

Deno.test("Test isNumber() function", () => {
  isNumber()("153889");
});

Deno.test("Test input is not number", () => {
  assertEquals(isNumber('This should be number')("153P889"),'This should be number');
});

Deno.test("Test input is number", () => {
  assertNotEquals(isNumber("This should be number")("153889"),'');
});



//console.log(fixedLength({length:5, msg:""})("153"));