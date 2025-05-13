

// 필터
const filterBtns = document.querySelectorAll(".filter-wrap a");
// 검색 조건
const searchConditions = document.querySelector(".search-conditions");
// 필터 초기화
const filterReset = document.querySelector(".filter-reset");
// 글작성 버튼
const postWriteBtn = document.querySelector(".write-btn");
// 스크랩
const scrapBtns = document.querySelectorAll(".scrap i");

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

// 스크랩 
scrapBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("scrap-active");
    });
});

// 글쓰기 페이지 이동
postWriteBtn.addEventListener("click", ()=>{
    location.href="./post-write.html"
});