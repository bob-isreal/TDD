const multiplyIndefiniteNumbers = require("./indefiniteMultiply");

test("Multiply five numbers 2,3,4,5,5", () => {
  expect(multiplyIndefiniteNumbers(2, 3, 4, 5, 5)).toBe(600);
});

test("Multply six numbers 1,2,3,4,5,6", () => {
  expect(multiplyIndefiniteNumbers(1, 2, 3, 4, 5, 6)).toBe(720);
});

test("Multiply an array of numbers of unknown length starting from 0", () => {
  let arr = [];
  for (let i = 0; i < 39; i++) {
    arr.push(i);
  }
  let ans = 0;
  arr.forEach(value => {
    ans *= value;
  });

  expect(multiplyIndefiniteNumbers(arr)).toBe(ans);
});

test("Multiply an array of numbers of unknown length excluding 0", () => {
  let arr = [];
  for (let i = 1; i < 16; i++) {
    arr.push(i);
  }
  let ans = 1;
  arr.forEach(value => {
    ans *= value;
  });

  expect(multiplyIndefiniteNumbers(arr)).toBe(ans);
});
