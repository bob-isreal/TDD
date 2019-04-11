const github = require("./github");
test("Expect to return name", () => {
  expect(github("samfeolu")).toBe(
    "My-Cv, Online-CRM, Project-Bem, sandbox, TDD, Techkny."
  );
});
