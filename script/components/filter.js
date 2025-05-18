// 필터
const filterBtns = document.querySelectorAll(".filter-list > button");
// 검색 조건
const searchConditions = document.querySelector(".active-filter-wrap> ul");
// 필터 초기화
const filterReset = document.querySelector(".filter-reset");
// 스크랩
const scrapBtns = document.querySelectorAll(".scrap i");

console.log(filterBtns);
console.log(filterReset);

// 필터 클릭시 이벤트(style)
// TODO : 실제 적용 필요
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filterName = btn.textContent.trim();
    // 필터 중복 방지
    const matchedFilter = Array.from(searchConditions.children).find(
      child => child.textContent.trim() === filterName
    );

    if (btn.classList.contains("btn-active")) {
      btn.classList.remove("btn-active");

      if (matchedFilter) {
        searchConditions.childNodes.forEach(filter => {
          if (filter.textContent === filterName) {
            filter.remove();
          }
        });
      }
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

        // 동적으로 생성된 liTag에 이벤트가 발생한 경우
        liTag.addEventListener("click", () => {
          filterBtns.forEach(filter => {
            const aTagName = liTag.querySelector("a").textContent.trim();
            if (aTagName === filter.textContent.trim()) {
              filter.classList.toggle("btn-active");
            }
          });
          liTag.remove();
        });
      }
    }
  });
});

// 초기화
filterReset.addEventListener("click", () => {
  console.log("ihih");
  while (searchConditions.children.length > 2) {
    searchConditions.removeChild(searchConditions.lastElementChild);
  }

  filterBtns.forEach(btn => {
    if (btn.classList.contains("btn-active")) {
      btn.classList.remove("btn-active");
    }
  });
});
