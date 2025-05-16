import { contestArr } from "../text/contest-text.js";

// const contest = contestArr.filter(item => {
//   return item.id === postId;
// });

const contestGrid = document.querySelector(".contest-grid"); // .contest-list-wrap으로 잡으셈
contestArr.forEach(item => {
  //   const contestGrid = document.createElement("div"); // div로 하고
  //   contestGrid.className = "contest-grid"; // contest-grid로 하면 될꺼임

  const card = document.createElement("contest-card");
  // JS
  card.setAttribute("dday", item.day);
  card.setAttribute("contestImg", item.img);
  card.setAttribute("contestTitle", item.title);
  card.setAttribute("contestOrg", item.org);
  card.setAttribute("contestViews", item.views);
  card.setAttribute("contestLikes", item.likes);

  contestGrid.appendChild(card);
});
