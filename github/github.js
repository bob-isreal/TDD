const got = require("got");
function githubRepo(username) {
  return got("https://api.github.com/users/" + username + "/repos", {
    json: true
  }).then(res => {
    let answer = "";
    res.body.forEach((value, index, arr) => {
      if (index == arr.length - 1) {
        answer += value.name + ".";
      } else {
        answer += value.name + ", ";
      }
    });
    return answer;
  });
}
githubRepo("samfeolu");
module.exports = githubRepo;
