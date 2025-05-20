import { contestRender } from "/script/contest/contest-list-render.js";

const filterBtns = document.querySelectorAll(".filter-list > button");
const searchConditions = document.querySelector(".active-filter-wrap> ul");
const filterReset = document.querySelector(".filter-reset");

let contestArr = [];

fetch("/script/data/contest-data.json")
  .then(res => res.json())
  .then(data => {
    contestArr = data;
  });

// 필터 적용 함수
function applyFilters() {
  const activeFilters = document.querySelectorAll(".filter-item");
  const selectedFilters = Array.from(activeFilters).map(el => el.textContent.trim());

  if (selectedFilters === 0) {
    contestRender(contestArr.slice(0, 12));
    return;
  }

  const filtered = contestArr.filter(item => {
    return selectedFilters.every(filter => {
      return (
        (item["공모분야"] && item["공모분야"].includes(filter)) ||
        (item["참여대상"] && item["참여대상"].includes(filter)) ||
        (item["시상규모"] && item["시상규모"].includes(filter))
      );
    });
  });
  contestRender(filtered.slice(0, 12));
}

// 필터 클릭 이벤트
document.addEventListener("click", e => {
  if (!e.target.classList.contains("filter-item")) return;

  const btn = e.target;
  const filterName = btn.textContent.trim();

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

    applyFilters();
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

        applyFilters();
      });

      applyFilters();
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

  applyFilters();
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
