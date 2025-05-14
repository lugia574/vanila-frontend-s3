
// 필터
const filterBtns = document.querySelectorAll(".filter-wrap a");
// 검색 조건
const searchConditions = document.querySelector(".search-conditions");
// 필터 초기화
const filterReset = document.querySelector(".filter-reset");
// 글작성 버튼
const postWriteBtn = document.querySelector(".write-btn");
// 위로 가기 버튼
const topBtn = document.querySelector(".top-btn");
// 스크랩
const scrapBtns = document.querySelectorAll(".scrap i");
// 분류 타입 
const divisionTypes = document.querySelectorAll(".division-type li a");

// 최초에 페이지 번호 렌더링
renderPagination();
// 페이지번호 렌더링 함수
function renderPagination(){
    
    const isMobile =  window.innerWidth <= 768;
    const maxPages = isMobile ? 5 : 10;

    const pagination = document.querySelector(".pagination");

    pagination.innerHTML = "";

    const leftLi = document.createElement("li");
    const leftI = document.createElement("i");
    leftI.classList.add("left-arrow");
    leftLi.appendChild(leftI);
    pagination.append(leftLi);
    
    for (let i = 1; i <= maxPages; i++) {
        const li = document.createElement("li");
        li.textContent = i;
        pagination.appendChild(li);
    }

    const rightLi = document.createElement("li");
    const rightI = document.createElement("i");
    rightI.classList.add("right-arrow");
    rightLi.appendChild(rightI);
    pagination.append(rightLi);
}

// 윈도우 리사이즈에 따라 다시 렌더링
window.addEventListener("resize", renderPagination);

// 필터 이벤트
filterBtns.forEach(btn =>{
    btn.addEventListener("click", ()=> {
        const filterName = btn.textContent.trim();
        // 필터 중복 방지 
        const matchedFilter = 
                Array.from(searchConditions.children).find(child=>child.textContent.trim()===filterName);

        if(btn.classList.contains("btn-active")){
            btn.classList.remove("btn-active");

            if(matchedFilter){
                searchConditions.childNodes.forEach(filter =>{
                    if(filter.textContent === filterName){
                        filter.remove();
                    }
                })
            }
        }else{
            btn.classList.add("btn-active");

            if(!matchedFilter){
                const liTag = document.createElement("li");
                const aTag = document.createElement("a");

                aTag.textContent = filterName;
                aTag.classList.add("search-filter-active");
                aTag.href="#";

                liTag.appendChild(aTag);
                searchConditions.appendChild(liTag); 
                
                // 동적으로 생성된 liTag에 이벤트가 발생한 경우
                liTag.addEventListener("click", ()=>{
                    filterBtns.forEach(filter=>{
                        const aTagName = liTag.querySelector("a").textContent.trim();
                        if(aTagName ===filter.textContent.trim()){
                            filter.classList.toggle("btn-active");
                        }
                    })
                    liTag.remove();
                });
            }       
        }
    });
})

// 초기화
filterReset.addEventListener("click", ()=>{
    while(searchConditions.children.length > 2){
        searchConditions.removeChild(searchConditions.lastElementChild);
    }
    
    filterBtns.forEach(btn=>{
        if(btn.classList.contains("btn-active")){
            btn.classList.remove("btn-active");
        }
    });
});

// 전체, 공모전, 스터디
divisionTypes.forEach(type =>{
    type.addEventListener("click", ()=>{
        // 1. 모든 타입에서 strong 제거
        divisionTypes.forEach(t => t.classList.remove("strong"));
        // 2. 선택한 것만 strong 추가
         type.classList.toggle("strong");

        // TODO : 필터 기능 추가


    });
});

// 스크랩 
scrapBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("scrap-active");
    });
});

// 글쓰기 페이지 이동
postWriteBtn.addEventListener("click", ()=>{
    location.href="./postWrite.html"
});

// 위로가기 
topBtn.addEventListener("click", ()=>{
    window.scrollTo(0,0);
});
