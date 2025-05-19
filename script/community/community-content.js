import { communityArr } from "../text/community-text.js";

const regBtn = document.querySelector(".register-btn");

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
  const id = getQueryParam("id");

  const contentData = communityArr.find(item => item.id.toString() === id);
  console.log(contentData);
  if (!contentData) return;

  document.querySelector(".main-type").textContent = contentData.field;
  document.querySelector(".nick-name").textContent = contentData.writer;
  document.querySelector(".title").textContent = contentData.title;
  document.querySelector(".content-right span").textContent = contentData.content;

});
