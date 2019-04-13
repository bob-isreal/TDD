const github = require("./github");

test("Expect result to return listof all repos", async () => {
  expect(await github("samfeolu")).toBe(
    "My-Cv, Online-CRM, Project-Bem, sandbox, TDD, Techkny."
  );
});
