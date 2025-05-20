import { getQueryParams } from "/script/common/get-query-params.js";
// 필터
const filterBtns = document.querySelectorAll(".filter-list > button");
// 검색 조건
const searchConditions = document.querySelector(".active-filter-wrap> ul");
// 필터 초기화
const filterReset = document.querySelector(".filter-reset");
// 스크랩
const scrapBtns = document.querySelectorAll(".scrap i");

// 메인에서 GET 으로 온거
const query = getQueryParams();
console.log(query);

// 필터 클릭시 이벤트(style)
// 기존 filterBtns 반복 제거하고, 부모에 이벤트 위임
document.addEventListener("click", e => {
  if (!e.target.classList.contains("filter-item")) return;

  const btn = e.target;
  const filterName = btn.textContent.trim();
  const searchConditions = document.querySelector(".active-filter-wrap > ul");

  // 이미 필터 적용된 상태 확인
  const matchedFilter = Array.from(searchConditions.children).find(
    child => child.textContent.trim() === filterName
  );

  if (btn.classList.contains("btn-active")) {
    btn.classList.remove("btn-active");

    if (matchedFilter) {
      matchedFilter.remove();
    }
    // 하위 필터 해제
    const detailList = document.querySelector(".detail-list");
    const activeDetailBtns = detailList.querySelectorAll(".btn-active");
    const activeFilters = document.querySelectorAll(".search-filter-active");

    activeDetailBtns.forEach(subBtn => {
      const subName = subBtn.textContent.trim();
      subBtn.classList.remove("btn-active");

      activeFilters.forEach(active => {
        if (active.textContent.trim() === subName) {
          active.parentElement.remove();
        }
      });
    });
  } else {
    btn.classList.add("btn-active");

    if (!matchedFilter) {
      const liTag = document.createElement("li");
      const aTag = document.createElement("a");

      aTag.textContent = filterName;
      aTag.classList.add("search-filter-active");
      aTag.href = "#";

      liTag.appendChild(aTag);
      searchConditions.appendChild(liTag);

      // li에서 필터 제거
      liTag.addEventListener("click", () => {
        liTag.remove();
        // 필터 버튼도 토글 해제
        document.querySelectorAll(".filter-item").forEach(filter => {
          if (filter.textContent.trim() === filterName) {
            filter.classList.remove("btn-active");
          }
        });
      });
    }
  }
});

// 초기화
filterReset.addEventListener("click", () => {
  while (searchConditions.children.length > 2) {
    searchConditions.removeChild(searchConditions.lastElementChild);
  }

  filterBtns.forEach(btn => {
    if (btn.classList.contains("btn-active")) {
      btn.classList.remove("btn-active");
    }
  });

  // 청년 정책 상세 필터 제거
  const detailList = document.querySelector(".detail-list");
  detailList.innerHTML = "";
});
