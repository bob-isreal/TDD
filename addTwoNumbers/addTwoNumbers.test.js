const addTwoNumbers = require("./addTwoNumbers");

test("Add two numbers 3 and 7", () => {
  expect(addTwoNumbers(3, 7)).toBe(10);
});

test("Add two float point numbers 3.57 and 9.32", () => {
  let num1 = 3.57,
    num2 = 9.32;
  expect(addTwoNumbers(num1, num2)).toBe(12.89);
});

test("Add a number and undefined", () => {
  let num1 = 34,
    num2 = undefined;
  expect(addTwoNumbers(num1, num2)).toBe(NaN);
});

test("Addition of String should return Not a Number", () => {
  expect(addTwoNumbers(1, "boy")).toBe("Not A Number");
});

test("Addition of String should return Not a Number", () => {
  expect(addTwoNumbers("girl", 7)).toBe("Not A Number");
});

test("Addition of any thing other than a number should return Not A Number", () => {
  expect(addTwoNumbers(NaN, Object)).toBe("Not A Number");
});

test("Addition Of NaN and NaN", () => {
  expect(addTwoNumbers(NaN, NaN)).toBe("Not A Number");
});

test("Addition of NaN and Undefined", () => {
  expect(addTwoNumbers(NaN, undefined)).toBe("Not A Number");
});
