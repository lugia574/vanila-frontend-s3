
import { communityArr } from "../text/community-text.js";
import '../components/community-card.js';

// 전역 변수
const cardBtn = document.getElementById("card-btn");
const listBtn = document.getElementById("list-btn");

let currentViewType = 'list'; // 기본값: 리스트형


listBtn.addEventListener("click", ()=>{
  currentViewType = 'list';
  renderCommunityList(1);
  renderPagination(1);
});

cardBtn.addEventListener("click", ()=>{
  currentViewType = 'card';
  renderCommunityList(1);
});

// 페이지 목록 렌더링 
// 동적 생성 별 기능 추가
function renderCommunityList(page = 1) {
  const container = document.getElementById("contnet-view");
  const pagination = document.querySelector(".pagination");
  if (!container) return;

  // 초기화
  container.innerHTML = "";
  pagination.innerHTML = "";

  if(currentViewType === 'list'){
    const itemsPerPage = 10;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = communityArr.slice(startIndex, endIndex);

    // TODO : 컴포넌트로 교체
    pageItems.forEach(item => {
      const aTag = document.createElement("a");
      aTag.classList.add("content-link");

        aTag.innerHTML = `
        <div class="content-wrap">
          <div class="content-header">
            <div class="left-group">
              <div class="title">${item.title}</div>
              <div class="field">${item.field || ""}</div>
            </div>
            <div class="right-group">
              <div class="type">${item.type}</div>
              <div class="d-day">D-${item.dDay}</div>
            </div>
          </div>
          <div class="content-summary">
            <p>${item.content}</p>
          </div>
          <div class="content-footer">
            <div class="left-group">
              <div class="writer">${item.writer}</div>
            </div>
            <div class="right-group">
              <div class="comment"><i></i><span>${item.comment}</span></div>
              <div class="scrap"><i></i><span>${item.scrap}</span></div>
            </div>
          </div>
        </div>
      `;

      // 마우스 커서 이벤트
      titlePoint(aTag);

      // 스크랩 이벤트
      scrap(aTag);

      container.appendChild(aTag);
    })

    chanageViewCss(container);
  }else{
    // 카드형인경우
    communityArr.forEach(item =>{      

      console.log(item);

      console.log("속성값:", 
      item.title
    );
      // 웹 컴포넌트 생성 및 속성 설정
      const communityCard = document.createElement('community-card');      
      communityCard.setAttribute('communityfield', item.field);
      communityCard.setAttribute('communitytype', item.type);
      communityCard.setAttribute('day', item.dDay);
      communityCard.setAttribute("communitytitle", item.title);
      communityCard.setAttribute('communitysummary', item.content);
      communityCard.setAttribute('communitywriter', item.writer);
      communityCard.setAttribute('communitycomments', item.comment);
      communityCard.setAttribute('communityscraps', item.scrap);
      
      container.appendChild(communityCard);


      const observer = new MutationObserver(() => {
      const aTag = communityCard.shadowRoot?.querySelector('.card-content-link');
      if (aTag) {
        scrap(aTag);
        titlePoint(aTag);
        observer.disconnect();
          }
      });

      observer.observe(communityCard.shadowRoot, { childList: true, subtree: true });

    });
    chanageViewCss(container);
  }
}
  
function chanageViewCss(container){
  if(currentViewType === "list"){
      container.classList.remove("card-view");
      container.classList.add("content-list");
  }else{
      container.classList.remove("content-list");
      container.classList.add("card-view");
  }
}
     
// 스크랩 이벤트
function scrap(aTag){
    const scrap = aTag.querySelector(".scrap i");
    scrap.addEventListener("click", () => {
        scrap.classList.toggle("scrap-active");
    });
}

// 마우스 오버시 style 변경
function titlePoint(aTag){
    const title = aTag.querySelector(".title");
    aTag.addEventListener("mouseover", () => {
      title.classList.add("point");
    });
    aTag.addEventListener("mouseout", () => {
      title.classList.remove("point");
    });
}

// 뷰 이벤트



// 페이징 렌더링
function renderPagination(currentPage = 1) {
  const isMobile = window.innerWidth <= 768;
  const maxVisiblePages = isMobile ? 5 : 10;
  const itemsPerPage = 10;
  const totalItems = communityArr.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pagination = document.querySelector(".pagination");
  if (!pagination) return;

  pagination.innerHTML = "";

  // 왼쪽 화살표
  const leftLi = document.createElement("li");
  const leftI = document.createElement("i");
  leftI.classList.add("left-arrow");
  leftLi.appendChild(leftI);
  if (currentPage > 1) {
    leftLi.addEventListener("click", () => {
      renderCommunityList(currentPage - 1);
      renderPagination(currentPage - 1);
    });
  }
  pagination.append(leftLi);

  // 시작 페이지 계산
  const startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    if (i === currentPage) li.classList.add("active");
    li.addEventListener("click", () => {
      renderCommunityList(i);
      renderPagination(i);
    });
    pagination.appendChild(li);
  }

  // 오른쪽 화살표
  const rightLi = document.createElement("li");
  const rightI = document.createElement("i");
  rightI.classList.add("right-arrow");
  rightLi.appendChild(rightI);
  if (currentPage < totalPages) {
    rightLi.addEventListener("click", () => {
      renderCommunityList(currentPage + 1);
      renderPagination(currentPage + 1);
    });
  }
  pagination.append(rightLi);
}


window.addEventListener("DOMContentLoaded", () => {
  renderCommunityList(1);
  renderPagination(1);
});