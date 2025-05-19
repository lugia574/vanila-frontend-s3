// import { contestArr } from "../data/contest-text.js";
import { contestRender } from "../contest/contest-list-render.js";

const contestPaging = async () => {
  // 버튼을 click 이벤트를 주고
  const btns = document.querySelectorAll(".page-btn");
  const grigContents = document.querySelector(".contest-grid");
  const jsonData = await fetch("/script/data/contest-data.json");
  const contents = await jsonData.json();
  // console.log(contents[0].접수기간.slice(11));

  btns.forEach(item => {
    const btn = item.querySelector("button");

    btn.addEventListener("click", () => {
      const currentPage = btn.querySelector("span").textContent;
      // 초기화
      grigContents.innerHTML = "";

      // 필터 배열을 만들어
      const itemsPerPage = 12;

      const startNum = (currentPage - 1) * itemsPerPage;
      const endNum = startNum + itemsPerPage;
      const pagingArr = contents.slice(startNum, endNum);
      // 렌더 함수
      contestRender(pagingArr);
    });
  });
};

contestPaging();
