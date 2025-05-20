import { renderFilteredList } from "/script/policy/policy-render.js";

// 요소 선택
const filterBtns = document.querySelectorAll(".filter-list > button");
const searchConditions = document.querySelector(".active-filter-wrap > ul");
const filterReset = document.querySelector(".filter-reset");

const SKIP_RENDER_IDS = ["region", "gu"];
const CATEGORY_LIST = ["일자리", "주거", "복지/문화", "참여/권리", "교육"];
const REGION_LIST = ["전국", "지역별", "서울시", "서울구별"];

document.addEventListener("click", e => {
  if (!e.target.classList.contains("filter-item")) return;

  const btn = e.target;
  const filterName = btn.textContent.trim();
  const isTopRegionFilter = SKIP_RENDER_IDS.includes(btn.id);

  const isCategory =
    btn.closest(".filter-list-wrap")?.querySelector("span")?.textContent === "분야";
  const isRegion = btn.closest(".filter-list-wrap")?.querySelector("span")?.textContent === "지역";

  // 단일 선택 처리
  if (isCategory || isRegion) {
    // 기존 버튼 클래스 초기화
    btn.parentElement
      .querySelectorAll(".filter-item")
      .forEach(el => el.classList.remove("btn-active"));

    // searchConditions에서 같은 필터 그룹 제거 (카테고리 or 지역 이름이 포함된 필터)
    const groupLabels = Array.from(searchConditions.querySelectorAll("li > a"));
    groupLabels.forEach(a => {
      const text = a.textContent.trim();
      const isMatch =
        (isCategory && CATEGORY_LIST.includes(text)) ||
        (isRegion &&
          (REGION_LIST.includes(text) ||
            koreaRegions.includes(text) ||
            seoulRegions.includes(text)));
      if (isMatch) {
        a.parentElement.remove();
      }
    });
  }

  // 필터 토글
  const matchedFilter = Array.from(searchConditions.children).find(
    child => child.textContent.trim() === filterName
  );

  if (btn.classList.contains("btn-active")) {
    btn.classList.remove("btn-active");
    if (matchedFilter) matchedFilter.remove();

    // 하위 필터 토글 해제 시 동기화
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

      liTag.addEventListener("click", () => {
        liTag.remove();
        document.querySelectorAll(".filter-item").forEach(filter => {
          if (filter.textContent.trim() === filterName) {
            filter.classList.remove("btn-active");
          }
        });
      });
    }
  }

  if (!isTopRegionFilter) {
    renderFilteredList();
  }
});

// 초기화
filterReset.addEventListener("click", () => {
  while (searchConditions.children.length > 2) {
    searchConditions.removeChild(searchConditions.lastElementChild);
  }

  filterBtns.forEach(btn => btn.classList.remove("btn-active"));
  document.querySelector(".detail-list").innerHTML = "";
});

// 필터 값 반환
export const getActiveFilters = () => {
  const excluded = ["지역별", "서울구별"];
  return Array.from(document.querySelectorAll(".filter-item.btn-active"))
    .map(btn => btn.textContent.trim())
    .filter(name => !excluded.includes(name));
};
