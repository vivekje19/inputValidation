import {
  assert,
  assertEquals,
  assertThrows,
  assertNotEquals
} from "https://deno.land/std@0.128.0/testing/asserts.ts";

import {  
  fixedLength
} from "../validationFunction.ts";

Deno.test("Check length of an number or string", () => {
  fixedLength({length:5, msg:"Contact length should be 5"})("153889");
});

Deno.test("Check length of an number or string is wrong", () => {
  assertEquals(fixedLength({length:5, msg:"Contact length should be 5"})("153889"),'Contact length should be 5');
});

Deno.test("Check length of an number or string is right", () => {
  assertNotEquals(fixedLength({length:5, msg:"Contact length should be 5"})("15889"),'Contact length should be 5');
});

//console.log(fixedLength({length:5, msg:""})("153"));