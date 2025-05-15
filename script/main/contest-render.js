// contest type
// title : string
// day :  number >> 이게 필요한가? Date.now 값 받아서 endDate 랑 빼기 해야하는거 아님? 하고싶으시면 하시고 아님 걍 말고
// img :  string (img 주소)
// org : string (주관사)
// views : number
// likes : number
//
// startDate : string
// endDate : string
// category : string
// CorporateType : string (string 값 정해줘 ex : midSize, largeSize, public 이렇게?)
// homePage : string
// benifit : string
// prize : string? (상금 규모)
// contents : string (상세내용)

const contestArr = [
  {
    title: "2025 제6회 부울경 ICT 아이디어 경진대회",
    day: 30,
    img: "../../public/images/contest/contest-3.jpg",
    org: "정보통신산업진흥원",
    views: 16,
    likes: 8,
    startDate: "2025-05-12",
    endDate: "2025-06-13",
    category: "IT",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "5천만원~3천만원",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회
`,
  },
  {
    title: "2025 대학언론 우수보도상 공모전",
    day: 30,
    img: "../../public/images/contest/contest-2.png",
    org: "한국언론진흥재단",
    views: 30,
    likes: 45,
    startDate: "2025-08-14",
    endDate: "2025-09-08",
    category: "IT",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "5천만원~3천만원",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회
`,
  },
  {
    title: "2999 제6회 부울경 ICT 아이디어 경진대회",
    day: 30,
    img: "../../public/images/contest/contest-3.jpg",
    org: "정보통신산업진흥원",
    views: 16,
    likes: 8,
    startDate: "2025-05-12",
    endDate: "2025-06-13",
    category: "IT",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "5천만원~3천만원",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회
`,
  },
  {
    title: "2025 제6회 부울경 ICT 아이디어 경진대회",
    day: 30,
    img: "../../public/images/contest/contest-3.jpg",
    org: "정보통신산업진흥원",
    views: 16,
    likes: 8,
    startDate: "2025-05-12",
    endDate: "2025-06-13",
    category: "IT",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "5천만원~3천만원",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회
`,
  },
  {
    title: "2025 제6회 부울경 ICT 아이디어 경진대회",
    day: 30,
    img: "../../public/images/contest/contest-3.jpg",
    org: "정보통신산업진흥원",
    views: 16,
    likes: 8,
    startDate: "2025-05-12",
    endDate: "2025-06-13",
    category: "IT",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "5천만원~3천만원",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회
`,
  },
  {
    title: "2025 제6회 부울경 ICT 아이디어 경진대회",
    day: 30,
    img: "../../public/images/contest/contest-3.jpg",
    org: "정보통신산업진흥원",
    views: 16,
    likes: 8,
    startDate: "2025-05-12",
    endDate: "2025-06-13",
    category: "IT",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "5천만원~3천만원",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회
`,
  },
  {
    title: "2025 제6회 부울경 ICT 아이디어 경진대회",
    day: 30,
    img: "../../public/images/contest/contest-3.jpg",
    org: "정보통신산업진흥원",
    views: 16,
    likes: 8,
    startDate: "2025-05-12",
    endDate: "2025-06-13",
    category: "IT",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "5천만원~3천만원",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회
`,
  },
  {
    title: "2025 제6회 부울경 ICT 아이디어 경진대회",
    day: 30,
    img: "../../public/images/contest/contest-3.jpg",
    org: "정보통신산업진흥원",
    views: 16,
    likes: 8,
    startDate: "2025-05-12",
    endDate: "2025-06-13",
    category: "IT",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "5천만원~3천만원",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회
`,
  },
];

const contestSlider = async () => {
  await new Swiper(".contest-swiper", {
    spaceBetween: 30,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: ".contest-button-next",
      prevEl: ".contest-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1, slidesPerGroup: 1 },
      480: { slidesPerView: 2, slidesPerGroup: 2 },
      768: { slidesPerView: 3, slidesPerGroup: 1 },
      1024: { slidesPerView: 4, slidesPerGroup: 1 },
    },
  });
};

contestSlider(); // 필요없음

const listEl = document.querySelector(".contest-swiper>ul"); // .contest-list-wrap으로 잡으셈
contestArr.forEach(async item => {
  const li = document.createElement("li"); // div로 하고
  li.className = "swiper-slide"; // contest-grid로 하면 될꺼임

  const card = document.createElement("contest-card");

  // JS
  card.setAttribute("dday", item.day);
  card.setAttribute("contestImg", item.img);
  card.setAttribute("contestTitle", item.title);
  card.setAttribute("contestOrg", item.org);
  card.setAttribute("contestViews", item.views);
  card.setAttribute("contestLikes", item.likes);

  li.appendChild(card);
  listEl.appendChild(li);
  await contestSlider(); // 유리님은 필요없음
});
