// import { contestArr } from "../data/contest-text.js";
import { calculateDDay } from "../common/calculate-dday.js";
const jsonData = await fetch("/script/data/contest-data.json");
const contents = await jsonData.json();

const contestSlider = () => {
  new Swiper(".contest-swiper", {
    spaceBetween: 30,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: ".contest-button-next",
      prevEl: ".contest-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1, slidesPerGroup: 1 },
      480: { slidesPerView: 2, slidesPerGroup: 1 },
      768: { slidesPerView: 3, slidesPerGroup: 1 },
      1024: { slidesPerView: 4, slidesPerGroup: 1 },
    },
  });
};

const listEl = document.querySelector(".contest-swiper>ul"); // .contest-list-wrap으로 잡으셈
contents.forEach(item => {
  const li = document.createElement("li"); // div로 하고
  li.className = "swiper-slide"; // contest-grid로 하면 될꺼임
  const src = `/pages/contest/contest-detail.html?id=${item.id + 1}`;
  const dday = item.접수기간.slice(11);

  const card = document.createElement("contest-card");

  // JS
  card.setAttribute("contestSrc", src);
  card.setAttribute("dday", calculateDDay(dday));
  card.setAttribute("contestImg", item.contest_img);
  card.setAttribute("contestTitle", item.title);
  card.setAttribute("contestOrg", item.org);
  card.setAttribute("contestViews", Math.floor(Math.random() * 1000));
  card.setAttribute("contestLikes", Math.floor(Math.random() * 1000));

  li.appendChild(card);
  listEl.appendChild(li);
});

contestSlider(); // 유리님은 필요없음
