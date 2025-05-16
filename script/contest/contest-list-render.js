import { contestArr } from "../text/contest-text.js";

const contestGrid = document.querySelector(".contest-grid"); // .contest-list-wrap으로 잡으셈
contestArr.forEach(item => {
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
