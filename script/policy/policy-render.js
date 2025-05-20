import { createCard } from "/script/components/policy-card.js";
import { getAllData } from "/script/policy/policy-fetch.js";

const container = document.getElementById("policy-content-container");
const CARD_COUNT_PER_PAGE = 24;

export const renderPage = (page = 1) => {
  const allItems = getAllData();
  const start = (page - 1) * CARD_COUNT_PER_PAGE;
  const end = start + CARD_COUNT_PER_PAGE;
  const currentItems = allItems.slice(start, end);

  container.innerHTML = "";

  const ul = document.createElement("ul");
  ul.className = "card-list";

  currentItems.forEach(item => {
    const card = createCard(item);
    ul.appendChild(card);
  });

  container.appendChild(ul);
};
