const { addTwoNumbers } = require("./app");

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
