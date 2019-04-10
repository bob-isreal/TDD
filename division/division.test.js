const secondDividesFirst = require("./division");

test("Divide 100 by 10", () => {
  let num1 = 100,
    num2 = 10;
  expect(secondDividesFirst(num1, num2)).toBe(10);
});

test("Divide 56 by 26 to give 2 Decimal Place", () => {
  let num1 = 56,
    num2 = 26;
  expect(secondDividesFirst(num1, num2)).toEqual(2.15);
});

test("Divide a Number by a String", () => {
  let num1 = 56,
    num2 = "random string";
  expect(secondDividesFirst(num1, num2)).toBeNaN();
});

test("Divide a Number by a String", () => {
  let num1 = 789,
    num2 = "random string";
  expect(secondDividesFirst(num1, num2)).toBe(NaN);
});

test("Divide an Even Number by 2 (should not give float number)", () => {
  let num1 = 788,
    num2 = 2;
  expect(secondDividesFirst(num1, num2)).toBe(num1 % num2);
});
