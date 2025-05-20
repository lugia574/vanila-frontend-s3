// import { getQueryParams } from "/script/common/get-query-params.js";
// 필터
const filterBtns = document.querySelectorAll(".filter-list > button");
// 검색 조건
const searchConditions = document.querySelector(".active-filter-wrap> ul");
// 필터 초기화
const filterReset = document.querySelector(".filter-reset");
// 검색 버튼
const searchBtn = document.querySelector(".search-btn");

// 현재 array
let currentArray = [];

// 메인에서 GET 으로 온거
// const query = getQueryParams();
// console.log(query);

// 검색 펑션 혜미 하시면 바로 훔치기 !@!!!!!!!!!!

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
    btn.addEventListener("click", () => {});
    if (btn.classList.contains("btn-active")) {
      btn.classList.remove("btn-active");
    }
  });

  // 청년 정책 상세 필터 제거
  const detailList = document.querySelector(".detail-list");
  detailList.innerHTML = "";
});

// 필터 가져오기
function getFilteredCommunityList() {
  const filters = getSelectedFilters();

  if (Object.keys(filters).length === 0) return communityArr;

  return communityArr.filter(item => {
    for (const key in filters) {
      if (!filters[key].includes(item[key])) return false;
    }
    return true;
  });
}

// 필터 정보 수집
function getSelectedFilters() {
  const selected = document.querySelectorAll(".search-conditions .search-filter-active");
  const filters = {};

  selected.forEach(el => {
    const text = el.textContent.trim();
    const btn = Array.from(filterBtns).find(b => b.textContent.trim() === text);

    if (btn) {
      const type = btn.dataset.filterType;
      if (!filters[type]) filters[type] = [];
      filters[type].push(text);
    }
  });
  return filters;
}

// 정렬 필터 정보 반환
function getCurrentSortType() {
  const activeSort = document.querySelector('ul.array a[data-filter-type="sort"].btn-active');
  return activeSort != null ? activeSort.textContent.trim() : null;
}

// 정렬 조건 처리
function filterAndSort(array, filterType) {
  if (filterType === null) {
    return array.slice().sort((a, b) => b.id - a.id);
  }

  switch (filterType) {
    case "최신순": // writeDate가 빠른 순 (즉, 최신이 먼저면 내림차순)
      array.sort((a, b) => new Date(b.writeDate) - new Date(a.writeDate));
      break;
    case "인기순": // comment 많은 순 (내림차순)
      array.sort((a, b) => b.comment - a.comment);
      break;
    case "스크랩순": // scrap 많은 순 (내림차순)
      array.sort((a, b) => b.scrap - a.scrap);
      console.log("스크랩순", array);
      break;
    case "종료임박순": // recruitmentEndDate가 가까운 순 (오름차순)
      array.sort((a, b) => new Date(a.recruitmentEndDate) - new Date(b.recruitmentEndDate));
      break;
    default:
      // 정렬하지 않을 경우
      break;
  }

  return array;
}
