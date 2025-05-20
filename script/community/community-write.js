
// 모집인원 추가/삭제
const addBtn = document.querySelector(".add-btn");
const delBtn = document.querySelector(".del-btn");
// 라디오 박스 옵션 체크 여부 : 공모전/스터디
const optionOne = document.querySelector("#option1");
const optionTwo = document.querySelector("#option2");
// type 
const typeBox = document.querySelector(".type-detail");

// main/sub/age Type box
const mainBox = document.querySelector(".main-type-main");
const subBox = document.querySelector(".sub-type-main");
const ageBox = document.querySelector(".age-group-main");

// main/sub/age category
const mainCategory = document.querySelector(".main-type-sub");
const subCategory = document.querySelector(".sub-type-sub");
const ageCategory = document.querySelector(".age-group-sub");

// main/sub/age CategoryList
const mainCategoryList = document.querySelectorAll(".main-type-sub li");
const subCategoryList = document.querySelectorAll(".sub-type-sub li");
const ageCategoryList = document.querySelectorAll(".age-group-sub li");

// register-btn
const regBtn = document.querySelector(".register-btn");

// 글 등록
regBtn.addEventListener("click", (e)=>{
    e.preventDefault();
})



// 날짜 입력 : toDay 값 설정
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

// radio 박스
optionOne.addEventListener("click", ()=>{
    typeBox.classList.remove("hidden");
});
optionTwo.addEventListener("click", ()=>{
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
    // 서브 카테고리에 내용 불러오기 
    main.addEventListener("click", ()=>{

        const mainBadge = main.textContent;
                console.log("mainBadge", mainBadge);

        let splitBadge = mainBadge.toString().split("/");

        console.log("splitBadge", splitBadge);
        // 여기에 들어가야할듯
        fetch('../../script/data/contest-data.json')
        .then(res => {
            if (!res.ok) throw new Error('네트워크 에러: ' + res.status);
            return res.json();
            })
            .then(data => {
                console.log("data", data);
                // data는 JSON 배열
                const titles = data
                .filter(item => {
                    console.log(item);
                    for(let i=0; i<splitBadge.length; i++){
                        console.log("진입");
                        if(item.공모분야.includes(splitBadge[i])){
                            console.log("진입");
                            return true;
                        }
                    }
                    return false;
                })
                .map(item => item.title);
                
                const uniqueTitles = [...new Set(titles)];
                console.log("uniqueTitles", uniqueTitles);

                subCategory.innerHTML = '';
                uniqueTitles.forEach(title => {

                    const li = document.createElement('li');
                    li.textContent = title;
                    subCategory.appendChild(li);

                    li.addEventListener("click", ()=>{
                        const subTitle = document.querySelector(".sub-title");
                        subTitle.textContent = li.textContent;
                        subCategory.classList.add(".hidden");
                    });
                })
            })
            .catch(err => {
                console.error('파일 읽기 실패:', err);
            });

        // 디자인 적용
        const mainTitle = document.querySelector(".main-title");
        mainTitle.textContent = main.textContent;
        mainCategory.classList.add(".hidden");
    });
})

    subCategoryList.forEach(sub => {
        sub.addEventListener("click", ()=>{
        const subTitle = document.querySelector(".sub-title");
        subTitle.textContent = sub.textContent;
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

// 추가 제거 버튼
let blockId = 1;

// 최초 버튼 선택
const initialAddBtn = document.querySelector(".add-btn");
const initialDelBtn = document.querySelector(".del-btn");
const initialCancleBtn = document.querySelector(".canale-btn");

// 취소 함수 
function cancleBlock(e) {
  e.preventDefault();

  location.href="./community-list.html";
}

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
if (initialCancleBtn) initialCancleBtn.addEventListener("click", cancleBlock);

