import { communityArr } from "../text/community-text.js";

// 전역변수
const regBtn = document.querySelector(".register-btn");
let timer;

// 저장 버튼 style
regBtn.addEventListener("mouseover", ()=>{
    regBtn.classList.add("btn-point");
});
regBtn.addEventListener("mouseout", ()=>{
    regBtn.classList.remove("btn-point");
});


const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id);

// 페이지 이동
function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// TODO : 내용 채우기 
window.addEventListener("DOMContentLoaded", () => {
  // 페이지 이동시 url에 param 전달받기기
  const id = getQueryParam("id");

  // array에서 id 일치하는 값 꺼내기
  const contentData = communityArr.find(item => item.id.toString() === id);
  console.log(contentData);
  if (!contentData) return;
  // 시작일
  const startDate = contentData.startDate;
  // 종료일
  const endDate = contentData.endDate;

  // 분야 : IT/학술/논문
  document.querySelector(".main-type").textContent = contentData.field;
  // 작성자 : 닉네임
  document.querySelector(".nick-name").textContent = contentData.writer;
  // 제목
  document.querySelector(".title").textContent = contentData.title;
  // 내용 상세
  document.querySelector(".content-right span").textContent = contentData.content;
  // 모집 연령
  document.querySelector(".recruitment-age .info-value").textContent = contentData.recruitmentAge;
  // 일정 
  document.querySelector(".period .info-value").textContent = startDate + " ~ " + endDate;

  // 모집 종료일
  const recruEndDate = contentData.recruitmentEndDate;
  // 모집 종료일로 남은 기간 동적 계산하여 1초마다 업데이트
  deadLineCal(recruEndDate);

  // 모집 상세
  // 모집 상세 반복문
  const roleBox = document.querySelector(".recruitment-left");
  const countBox = document.querySelector(".recruitment-right");

  const recruitmentDetail = contentData.recruitmentDetail;
  recruitmentDetail.forEach(item =>{
    const roleSpan= document.createElement("span");
    const countSpan= document.createElement("span");
    roleSpan.textContent = item.role;
    countSpan.textContent = item.count;

    roleBox.appendChild(roleSpan);
    countBox.appendChild(countSpan);
  })

});


// 모집 종료 계산기
function deadLineCal(recruEndDate){
  const endTime = new Date(recruEndDate+"T23:59:59");

  // 2. 카운트다운 함수
  function updateCountdown() {
    let recruitmentEnd = document.querySelector(".dead-line .info-value");
    const now = new Date();
    const diff = endTime - now;

    if (diff <= 0) {
      recruitmentEnd.textContent = "모집이 종료되었습니다.";
      clearInterval(timer); // 더 이상 반복 안 하도록 정지
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const days = String(Math.floor(totalSeconds / (60 * 60 * 24)));
    const hours = String(Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % (60 * 60)) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    recruitmentEnd.textContent = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
  }

  // 3. 1초마다 업데이트
  updateCountdown(); // 즉시 실행 한 번
  timer = setInterval(updateCountdown, 1000);
}

