const addIndefiniteNumbers = require("./indefinite");

test("Add five numbers 2,3,4,5,5", () => {
  expect(addIndefiniteNumbers(2, 3, 4, 5, 5)).toBe(14);
});

test("Add six numbers 23,557,302,490,59.5,54.98", () => {
  expect(addIndefiniteNumbers(23, 557, 302, 490, 59.5, 54.98)).toBe(1486.48);
});

test("Add an array of numbers of unknown length", () => {
  let arr = [];
  for (let i = 0; i < 39; i++) {
    arr.push(i);
  }
  let ans = 0;
  arr.forEach(value => {
    ans += value;
  });

  expect(addIndefiniteNumbers(arr)).toBe(ans);
});
