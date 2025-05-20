import { communityArr } from "../text/community-text.js";
import { calculateDDay } from "../common/calculate-dday.js";

const communityList = document.querySelector(".community-list");

communityArr.forEach(item => {
  const li = document.createElement("li");
  const card = document.createElement("community-list");

  card.setAttribute("communityId", item.id);
  card.setAttribute("communityfield", item.field);
  card.setAttribute("communitytype", item.type);
  card.setAttribute("day", calculateDDay(item.endDate));
  card.setAttribute("communitytitle", item.title);
  card.setAttribute("communitysummary", item.content);
  card.setAttribute("communitywriter", item.writer);
  card.setAttribute("communitycomments", item.comment);
  card.setAttribute("communityscraps", item.scrap);

  li.appendChild(card);
  communityList.appendChild(li);
});
