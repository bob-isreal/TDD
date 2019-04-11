const got = require("got");
async function githubRepo(username) {
  let answer = await got(
    "https://api.github.com/users/" + username + "/repos",
    {
      json: true
    }
  );
  /* .then(res => {
      res.body.forEach(element => {
        console.log(element.name);
      });
    })
    .catch(err => {
      console.log(err);
    }); */
  //console.log(data);
  return await answer;
}
githubRepo("samfeolu");
module.exports = githubRepo;
