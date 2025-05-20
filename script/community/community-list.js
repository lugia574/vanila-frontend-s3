
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
const searchConditions = document.querySelector(".search-conditions");




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
