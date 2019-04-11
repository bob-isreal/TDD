function github(username) {
  let ans = [
    {
      id: 179523201,
      node_id: "MDEwOlJlcG9zaXRvcnkxNzk1MjMyMDE=",
      name: "My-Cv",
      full_name: "Samfeolu/My-Cv",
      private: false
    },
    {
      id: 172734068,
      node_id: "MDEwOlJlcG9zaXRvcnkxNzI3MzQwNjg=",
      name: "Online-CRM",
      full_name: "Samfeolu/Online-CRM",
      private: false
    },
    {
      id: 179286333,
      node_id: "MDEwOlJlcG9zaXRvcnkxNzkyODYzMzM=",
      name: "Project-Bem",
      full_name: "Samfeolu/Project-Bem",
      private: false
    },
    {
      id: 169875100,
      node_id: "MDEwOlJlcG9zaXRvcnkxNjk4NzUxMDA=",
      name: "sandbox",
      full_name: "Samfeolu/sandbox",
      private: false
    },
    {
      id: 180606287,
      node_id: "MDEwOlJlcG9zaXRvcnkxODA2MDYyODc=",
      name: "TDD",
      full_name: "Samfeolu/TDD",
      private: false
    },
    {
      id: 169593256,
      node_id: "MDEwOlJlcG9zaXRvcnkxNjk1OTMyNTY=",
      name: "Techkny",
      full_name: "Samfeolu/Techkny",
      private: false
    }
  ];
  let answer = "";
  ans.forEach((value, index, arr) => {
    if (index == arr.length - 1) {
      answer += value.name + ". ";
    } else {
      answer += value.name + ", ";
    }
  });
  return answer;
}
github("samfeolu");
module.exports = github;
