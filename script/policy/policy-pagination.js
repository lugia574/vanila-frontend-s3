import { getAllData } from "/script/policy/policy-fetch.js";
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

  return { totalPages, startPage, endPage, currentBlock };
}

// 페이지네이션 버튼 생성 함수
function createPaginationButton(label, page, disabled = false) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.disabled = disabled;
  btn.addEventListener("click", () => {
    currentPage = page;
    renderPage(currentPage);
    renderPagination();
  });
  return btn;
}

// 페이지네이션 UI 렌더링
export function renderPagination() {
  const allItems = getAllData();
  const totalItems = allItems.length;
  const { totalPages, startPage, endPage } = calculatePagination(totalItems);

  paginationContainer.innerHTML = "";

  //   처음으로(1페이지) 이동 버튼
  //   paginationContainer.appendChild(createPaginationButton("⏮", 1, currentPage === 1));

  //   이전 페이지
  if (startPage > 1) {
    paginationContainer.appendChild(createPaginationButton("◀", startPage - 1));
  }

  for (let i = startPage; i <= endPage; i++) {
    const btn = createPaginationButton(i, i);
    if (i === currentPage) btn.classList.add("active");
    paginationContainer.appendChild(btn);
  }

  //   다음페이지
  if (endPage < totalPages) {
    paginationContainer.appendChild(createPaginationButton("▶", endPage + 1));
  }

  //   마지막 페이지로 이동 버튼
  //   paginationContainer.appendChild(
  //     createPaginationButton("⏭", totalPages, currentPage === totalPages)
  //   );
}

// 초기 렌더링 진입점
renderPage(currentPage);
renderPagination();
