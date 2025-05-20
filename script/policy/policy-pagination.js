import { renderPage } from "/script/policy/policy-render.js";

const paginationContainer = document.querySelector(".policy-pagination");
const CARD_COUNT_PER_PAGE = 24;

let currentPage = 1;

// 전체 게시물 수를 기반으로 페이지네이션 블록 계산
function calculatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / CARD_COUNT_PER_PAGE);
  const currentBlock = Math.ceil(currentPage / 5);
  const startPage = (currentBlock - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  return { totalPages, startPage, endPage };
}

// 페이지네이션 버튼 생성 함수
function createPaginationButton(label, page, filteredItems) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.disabled = false;

  btn.addEventListener("click", () => {
    currentPage = page;
    renderPage(currentPage, filteredItems);
    renderPagination(filteredItems); // ✅ 다시 페이지네이션 업데이트
  });

  return btn;
}

// 🔥 수정된 함수: 필터링된 items를 받아서 렌더링
export function renderPagination(filteredItems) {
  const totalItems = filteredItems.length;
  const { totalPages, startPage, endPage } = calculatePagination(totalItems);

  paginationContainer.innerHTML = "";

  // 이전 블록 버튼
  if (startPage > 1) {
    paginationContainer.appendChild(createPaginationButton("◀", startPage - 1, filteredItems));
  }

  for (let i = startPage; i <= endPage; i++) {
    const btn = createPaginationButton(i, i, filteredItems);
    if (i === currentPage) btn.classList.add("active");
    paginationContainer.appendChild(btn);
  }

  // 다음 블록 버튼
  if (endPage < totalPages) {
    paginationContainer.appendChild(createPaginationButton("▶", endPage + 1, filteredItems));
  }
}
