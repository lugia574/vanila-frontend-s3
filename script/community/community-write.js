
// 전역 변수
// 모집인원 추가 버튼
const addBtn = document.querySelector(".add-btn");
// 모집인원 삭제 버튼
const delBtn = document.querySelector(".del-btn");
// 라디오 박스 옵션 체크 여부1 : 공모전
const optionOne = document.querySelector("#option1");
// 라디오 박스 옵션 체크 여부2 : 스터디
const optionTwo = document.querySelector("#option2");
// type 
const typeBox = document.querySelector(".type-detail");

// main Type box
const mainBox = document.querySelector(".main-type-main");
// sub Type box
const subBox = document.querySelector(".sub-type-main");
// age group box
const ageBox = document.querySelector(".age-group-main");

// main category
const mainCategory = document.querySelector(".main-type-sub");
// sub category
const subCategory = document.querySelector(".sub-type-sub");
// age category
const ageCategory = document.querySelector(".age-group-sub");

// mainCategoryList
const mainCategoryList = document.querySelectorAll(".main-type-sub li");
// subCategoryList
const subCategoryList = document.querySelectorAll(".sub-type-sub li");
// ageCategoryList
const ageCategoryList = document.querySelectorAll(".age-group-sub li");

// cancle btn
const cancleBtn = document.querySelector(".canale-btn");


// 날짜 박스안에 오늘 날짜 설정
document.addEventListener("DOMContentLoaded", () =>{
    // 오늘 년, 월, 일 구하기
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작
    const day = String(today.getDate()).padStart(2, '0');

    const todayStr = `${year}-${month}-${day}`;


    const dateBox = document.querySelectorAll('input[type="date"]');
    dateBox.forEach(date=>{
        date.value = todayStr;
    })
})

// radio 박스 선택
// 공모전이면 보이게
optionOne.addEventListener("click", ()=>{
    // hidden 제거 
    typeBox.classList.remove("hidden");
});

//스터디면 안보이게
optionTwo.addEventListener("click", ()=>{
    // hidden 추가
    typeBox.classList.add("hidden");
});


// 메인분야/서브분야 선택시 목록 보이기
mainBox.addEventListener("click", ()=>{
    mainCategory.classList.toggle("hidden");
});
subBox.addEventListener("click", ()=>{
    subCategory.classList.toggle("hidden");
});
// 모집연령 선택시 목록 보이게
ageBox.addEventListener("click", (e)=>{
    e.preventDefault();
    ageCategory.classList.toggle("hidden");
});

// 메인, 서브 선택시 스크롤바 없어지고 input에 적용
mainCategoryList.forEach(main => {
    main.addEventListener("click", ()=>{
        const mainTitle = document.querySelector(".main-title");
        mainTitle.textContent = main.textContent;
        mainCategory.classList.add(".hidden");
    });
})

subCategoryList.forEach(sub => {
    sub.addEventListener("click", ()=>{
        const subTitle = document.querySelector(".sub-title");
        subTitle.textContent = sub.textContent;
        // todo : 색 바꿀지 결정subTitle.classList.add("choice");
        subCategory.classList.add(".hidden");
    });
})

// 모집연령 선택시 스크롤바 없어지고 input에 적용
ageCategoryList.forEach(age => {
    age.addEventListener("click", ()=>{
        const subTitle = document.querySelector(".age-title");
        subTitle.textContent = age.textContent;
        // todo : 색 바꿀지 결정subTitle.classList.add("choice");
        ageCategory.classList.add(".hidden");
    });
})

cancleBtn.addEventListener("click", ()=>{
    location.href="./postList.html";
});


// 추가 제거 버튼
// let blockId = 1;

// // 최초 add 버튼 선택
// const initialAddBtn = document.querySelector(".add-btn");

// // 이벤트 등록 함수
// function addBlock(e) {
//   e.preventDefault();

//   // 부모 블록 복사
//   const parent = e.target.closest(".recruitment-count-wrap");
//   const clone = parent.cloneNode(true);

//   // input 초기화
//   clone.querySelectorAll("input").forEach(input => input.value = "");

//   // 고유 ID 부여
//   blockId++;
//   clone.setAttribute("data-id", blockId);

//   // 복제된 블록의 새 add 버튼에 이벤트 다시 바인딩
//   const newAddBtn = clone.querySelector(".add-btn");
//   if (newAddBtn) {
//     newAddBtn.addEventListener("click", addBlock);
//   }

//   // 복제된 블록 추가
//   const recruitmentContainer = document.querySelector(".recruitment-container");
//   recruitmentContainer.appendChild(clone);
// }

// // 최초 버튼에만 초기 등록
// if (initialAddBtn) {
//   initialAddBtn.addEventListener("click", addBlock);
// }

// // 삭제
// delBtn.addEventListener("click", function (e) {
//     // 삭제 버튼 클릭 시
   
//     e.preventDefault();
//     const container = document.getElementById("recruitment-container");
//     const blocks = container.querySelectorAll(".recruitment-count-wrap");

//     if (blocks.length > 1) {
//         const targetWrap = e.target.closest(".recruitment-count-wrap");
//         targetWrap.remove();
//     } else {
//         alert("최소 1개는 남겨야 합니다.");
//     }
    
// });

let blockId = 1;

// 최초 버튼 선택
const initialAddBtn = document.querySelector(".add-btn");
const initialDelBtn = document.querySelector(".del-btn");

// 삭제 함수
function deleteBlock(e) {
  e.preventDefault();

  const container = document.querySelector(".recruitment-container");
  const blocks = container.querySelectorAll(".recruitment-count-wrap");

  if (blocks.length > 1) {
    const targetWrap = e.target.closest(".recruitment-count-wrap");
    targetWrap.remove();
  } else {
    alert("최소 1개는 남겨야 합니다.");
  }
}

// 추가 함수
function addBlock(e) {
  e.preventDefault();

  const parent = e.target.closest(".recruitment-count-wrap");
  const clone = parent.cloneNode(true);

  // input 초기화
  clone.querySelectorAll("input").forEach(input => input.value = "");

  // 고유 ID 부여
  blockId++;
  clone.setAttribute("data-id", blockId);

  // 복제된 버튼들에 이벤트 재등록
  const newAddBtn = clone.querySelector(".add-btn");
  const newDelBtn = clone.querySelector(".del-btn");

  if (newAddBtn) newAddBtn.addEventListener("click", addBlock);
  if (newDelBtn) newDelBtn.addEventListener("click", deleteBlock);

  // 복제된 블록 추가
  const recruitmentContainer = document.querySelector(".recruitment-container");
  recruitmentContainer.appendChild(clone);
}

// 최초 버튼에만 초기 등록
if (initialAddBtn) initialAddBtn.addEventListener("click", addBlock);
if (initialDelBtn) initialDelBtn.addEventListener("click", deleteBlock);
