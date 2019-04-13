const differenceBetweenTwoNumbers = require("./difference");

test("Difference Between 1963 and 1295", () => {
  expect(differenceBetweenTwoNumbers(1963, 1295)).toBe(668);
});

test("Difference Between NaN and NaN", () => {
  expect(differenceBetweenTwoNumbers(NaN, NaN)).toBe("Not A Number");
});

test("Difference Between a String and a number", () => {
  expect(differenceBetweenTwoNumbers("adedayo", 76)).toBe(
    "Only Numbers are Allowed"
  );
});
