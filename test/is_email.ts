import {
  assert,
  assertEquals,
  assertThrows,
  assertNotEquals
} from "https://deno.land/std@0.128.0/testing/asserts.ts";

import {  
  isEmail
} from "../validationFunction.ts";

Deno.test("Check isEmail function", () => {
  isEmail()("vivek@gmail.com");
});

Deno.test("Check email-id is invalid", () => {
  assertEquals(isEmail()("vivek@g"),'Invalid email-id');
});

Deno.test("Check email-id is valide", () => {
  assertNotEquals(isEmail()("vivek@gmail.com"),'Invalid email-id');
});