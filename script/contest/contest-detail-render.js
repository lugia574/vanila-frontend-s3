import { contestArr } from "../data/contest-text.js";

const postId = parseInt(new URLSearchParams(location.search).get("id"));

const filterArr = contestArr.filter(item => {
  return item.id === postId;
});

const contest = filterArr[0];

const contestWrap = document.querySelector(".contest-detail-wrap"); // .contest-list-wrap으로 잡으셈

const titleWrap = contestWrap.querySelector(".title-wrap .title-left");
const image = contestWrap.querySelector(".contest-image img");
const infoField = contestWrap.querySelector(".activity-infomation-field");
const contents = contestWrap.querySelector(".activity-contents");

const dday = document.createElement("strong");
dday.textContent = `D-${contest.day}`;

const title = document.createElement("h1");
title.textContent = contest.title;

titleWrap.appendChild(dday);
titleWrap.appendChild(title);

// 4. 이미지 및 지원하기 버튼
image.src = contest.img;
image.alt = contest.title;

const category = contest.category; // 전처리 해줘잉
const prize = contest.prize;
const corporateType = contest.CorporateType;

// 5. 상세 정보 구성
infoField.innerHTML = `
  <dl>
    <dt>기업형태</dt>
    <dd>${corporateType}</dd>
    <dt>시상규모</dt>
    <dd>${prize}</dd>
    <dt>홈페이지</dt>
    <dd><a href="${contest.homePage}" target="_blank">지원 홈페이지 가기</a></dd>
    <dt>공모분야</dt>
    <dd>${category}</dd>
    <dt>접수기간</dt>
    <dd>${contest.startDate} ~ ${contest.endDate}</dd>
  </dl>
`;

// 6. 상세내용
contents.innerHTML = contest.contents;
