import { createCard } from "/script/components/policy-card.js";
import { getAllData } from "/script/policy/policy-fetch.js";
import { getActiveFilters } from "/script/policy/policy-filter-component.js";
import { renderPagination } from "/script/policy/policy-pagination.js";

const container = document.getElementById("policy-content-container");
const CARD_COUNT_PER_PAGE = 24;

// 🔹 필터링 로직 (OR 조건 + 정보X 대응 포함)
export const applyFilter = () => {
  const filters = getActiveFilters();
  const all = getAllData();

  if (filters.length === 0) return all;

  return all.filter(item =>
    filters.some(
      filter =>
        item.category?.includes(filter) ||
        (filter === "정보X" && item.category === "") ||
        item.region?.includes(filter)
    )
  );
};

// 🔹 페이지별 렌더링
export const renderPage = (page = 1, items = getAllData()) => {
  const start = (page - 1) * CARD_COUNT_PER_PAGE;
  const end = start + CARD_COUNT_PER_PAGE;
  const currentItems = items.slice(start, end);

  container.innerHTML = "";

  if (currentItems.length === 0) {
    container.innerHTML = "<p class='no-result'>조건에 맞는 정책이 없습니다.</p>";
    return;
  }

  const ul = document.createElement("ul");
  ul.className = "card-list";

  currentItems.forEach(item => ul.appendChild(createCard(item)));
  container.appendChild(ul);
};

// 🔹 필터 적용 시 첫 페이지 + 페이지네이션 초기화
export const renderFilteredList = () => {
  const filtered = applyFilter();
  renderPage(1, filtered);
  renderPagination(filtered); // 필터링된 데이터 기준으로 페이지네이션 생성
};
