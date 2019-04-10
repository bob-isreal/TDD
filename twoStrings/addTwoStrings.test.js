const addTwoStrings = require("./addTwoStrings");

test("Add two single string 'Hello' and 'World'", () => {
  expect(addTwoStrings("Hello", "World")).toBe("HelloWorld");
});

test("Add two string 'Hello' and ' World'", () => {
  expect(addTwoStrings("Hello", " World")).toBe("Hello World");
});

test("Add two string 'Hello ' and 'World'", () => {
  expect(addTwoStrings("Hello ", "World")).toBe("Hello World");
});

test("Add two multi string 'Hello ' and 'World. How are you doing?'", () => {
  expect(addTwoStrings("Hello ", "World. How are you doing?")).toBe(
    "Hello World. How are you doing?"
  );
});
