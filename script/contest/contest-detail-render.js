// import { contestArr } from "../data/contest-text.js";
import { calculateDDay } from "../common/calculate-dday.js";

const contestDetail = async () => {
  const postId = parseInt(new URLSearchParams(location.search).get("id"));
  const jsonData = await fetch("/script/data/contest-data.json");
  const contestArr = await jsonData.json();

  const filterArr = contestArr.filter(item => {
    return item.id + 1 === postId;
  });

  const contest = filterArr[0];

  const contestWrap = document.querySelector(".contest-detail-wrap"); // .contest-list-wrap으로 잡으셈

  const titleWrap = contestWrap.querySelector(".title-wrap .title-left");
  const image = contestWrap.querySelector(".contest-image img");
  const infoField = contestWrap.querySelector(".activity-infomation-field");
  const contents = contestWrap.querySelector(".activity-contents");
  const bookmarkBtn = document.querySelector(".contest-bookmark");
  const bookmarkImg = document.querySelector(".contest-bookmark img");
  const homePageLink = document.querySelector(".contest-apply-btn > a");

  let isBookmark = false;

  // 북마크 버튼

  bookmarkBtn.addEventListener("click", () => {
    isBookmark = !isBookmark;

    if (isBookmark) {
      bookmarkImg.src = "/assets/icons/heart-red.svg";
    } else {
      bookmarkImg.src = "/assets/icons/iconmonstr-heart-lined.svg";
    }
  });

  const dday = document.createElement("strong");
  dday.textContent = `D-${calculateDDay(contest.접수기간.slice(11))}`;

  const title = document.createElement("h1");
  title.textContent = contest.title;

  titleWrap.appendChild(dday);
  titleWrap.appendChild(title);

  // 4. 이미지 및 지원하기 버튼
  image.src = contest.contest_img;
  image.alt = contest.title;
  homePageLink.href = contest.홈페이지;

  const category = contest.공모분야;
  const prize = contest.시상규모;
  const corporateType = contest.기업형태;

  // 5. 상세 정보 구성
  infoField.innerHTML = `
  <dl>
    <dt>기업형태</dt>
    <dd>${corporateType}</dd>
    <dt>시상규모</dt>
    <dd>${prize}</dd>
    <dt>홈페이지</dt>
    <dd><a href="${contest.홈페이지}" target="_blank">지원 홈페이지 가기</a></dd>
    <dt>공모분야</dt>
    <dd>${category}</dd>
    <dt>접수기간</dt>
    <dd>${contest.접수기간}</dd>
  </dl>
`;

  // 6. 상세내용
  contents.innerHTML = contest.article_html;
};

contestDetail();
