import { contestArr } from "../text/contest-text.js";

const postId = parseInt(new URLSearchParams(location.search).get("id"));
console.log(postId);

const contest = contestArr.filter(item => {
  return item.id === postId;
});

console.log(contest);
