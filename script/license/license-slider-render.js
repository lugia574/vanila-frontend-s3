import { licenseData } from "../data/license-text.js";
import { calculateDDay } from "../common/calculate-dday.js";
import { licenseSlider } from "../main/license-slider.js";

const licenseWrap = document.querySelector(".license-swiper>ul");

licenseData.forEach(item => {
  const li = document.createElement("li");
  li.className = "swiper-slide";
  const card = document.createElement("license-card");

  card.setAttribute("licenseSrc", item.licenseSrc);
  card.setAttribute("licenseTag", item.licenseTag);
  card.setAttribute("dday", calculateDDay(item.endDate));
  card.setAttribute("licenseName", item.licenseName);
  card.setAttribute("licenseSummary", item.licenseSummary);

  li.appendChild(card);
  licenseWrap.appendChild(li);
});

licenseSlider();
