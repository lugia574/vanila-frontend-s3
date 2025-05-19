
// 필터
const filterBtns = document.querySelectorAll(".filter-wrap a");
// 검색 조건
const searchConditions = document.querySelector(".search-conditions");
// 필터 초기화
const filterReset = document.querySelector(".filter-reset");
// 글작성 버튼
const writeBtn = document.querySelector(".write-btn");
// 위로 가기 버튼
const topBtn = document.querySelector(".top-btn");
// 스크랩
const scrapBtns = document.querySelectorAll(".scrap i");
// 분류 타입
const divisionTypes = document.querySelectorAll(".division-type li a");
// content 
const contentLinks = document.querySelectorAll(".content-link");


// 필터 mouse over 이벤트 
// filterBtns.forEach(btn => {
//   btn.addEventListener('mouseover', () => {
//     btn.classList.add("btn-active");
//   });

//   btn.addEventListener('mouseout', () => {
//     btn.classList.remove("btn-active");
//   });

// });


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
  while (searchConditions.children.length > 2) {
    searchConditions.removeChild(searchConditions.lastElementChild);
  }

  filterBtns.forEach(btn => {
    if (btn.classList.contains("btn-active")) {
      btn.classList.remove("btn-active");
    }
  });
});

// 전체, 공모전, 스터디
divisionTypes.forEach(type => {
  type.addEventListener("click", () => {
    // 1. 모든 타입에서 strong 제거
    divisionTypes.forEach(t => t.classList.remove("strong"));
    // 2. 선택한 것만 strong 추가
    type.classList.toggle("strong");

    // TODO : 필터 기능 추가
  });
});


// 글쓰기 페이지 이동
writeBtn.addEventListener("click", () => {
  location.href = "./community-write.html";
});

// 위로가기
topBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// 처음에 시작할때 전체 선택 및 디자인 적용
divisionTypes.forEach(type => {
  if(type.textContent==="전체"){
    type.classList.add("strong");

  }
});
