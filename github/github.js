const got = require("got");

console.log("working");

/* got("https://api.github.com/users/samfeolu/repos").then(res => {
  console.log(res.body);
}); */
got("https://ghibliapi.herokuapp.com/films").then(res => {
  res.body;
  console.log(res.body[0]);
});
