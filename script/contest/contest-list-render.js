// import { contestArr } from "../data/contest-text.js";
import { calculateDDay } from "../common/calculate-dday.js";

export const contestRender = async contents => {
  const contestGrid = document.querySelector(".contest-grid"); // .contest-list-wrap으로 잡으셈

  // 화면 초기화
  contestGrid.innerHTML = "";

  contents.forEach(item => {
    const card = document.createElement("contest-card");
    const src = `/pages/contest/contest-detail.html?id=${item.id + 1}`;
    const dday = item.접수기간.slice(11);
    // JS
    card.setAttribute("contestSrc", src);
    card.setAttribute("dday", calculateDDay(dday));
    card.setAttribute("contestImg", item.contest_img);
    card.setAttribute("contestTitle", item.title);
    card.setAttribute("contestOrg", item.org);
    card.setAttribute("contestViews", Math.floor(Math.random() * 1000));
    card.setAttribute("contestLikes", Math.floor(Math.random() * 1000));

    contestGrid.appendChild(card);
  });
};
