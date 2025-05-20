import { communityArr } from "../text/community-text.js";
import { calculateDDay } from "../common/calculate-dday.js";

const id = parseInt(new URLSearchParams(location.search).get("id"));
const communityTeam = document.querySelector(".team");
// console.log(communityTeam, communityArr);

const filterCommunityArr = communityArr.filter(item => {
  //   console.log(communityTeam, communityArr);
  if (id === item.contestId) return item;
});

filterCommunityArr.forEach(item => {
  const li = document.createElement("li");
  const card = document.createElement("community-list");

  card.setAttribute("communityfield", item.field);
  card.setAttribute("communitytype", item.type);
  card.setAttribute("day", calculateDDay(item.endDate));
  card.setAttribute("communitytitle", item.title);
  card.setAttribute("communitysummary", item.content);
  card.setAttribute("communitywriter", item.writer);
  card.setAttribute("communitycomments", item.comment);
  card.setAttribute("communityscraps", item.scrap);

  li.appendChild(card);
  communityTeam.appendChild(li);
});
