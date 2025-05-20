// contest type
// id : number
// title : string
// day :  number >> 이게 필요한가? Date.now 값 받아서 endDate 랑 빼기 해야하는거 아님? 하고싶으시면 하시고 아님 걍 말고
// img :  string (img 주소)
// org : string (주관사)
// views : number
// likes : number
// age : "university" | "noLimit"
// startDate : string
// endDate : string
// category : string
// CorporateType : string (string 값 정해줘 ex : midSize, largeSize, public 이렇게?)
// homePage : string
// benifit : string
// prize : string? (상금 규모)
// contents : string (상세내용)

export const contestArr = [
  {
    id: 1,
    title: "2025 제6회 부울경 ICT 아이디어 경진대회",
    day: 30,
    img: "/public/images/contest/contest-4.jpg",
    org: "정보통신산업진흥원",
    views: 16,
    likes: 8,
    startDate: "2025-05-12",
    endDate: "2025-06-13",
    category: "idea",
    CorporateType: "midSize",
    homePage: "http://www.ictcomplex.ai.kr/",
    prize: "prize3",
    contents: `2025 제6회 부울경 ICT 아이디어 경진대회`,
  },
  {
    id: 2,
    title: "2025 대학언론 우수보도상 공모전",
    day: 30,
    img: "/public/images/contest/contest-2.png",
    org: "한국언론진흥재단",
    views: 30,
    likes: 45,
    startDate: "2025-08-14",
    endDate: "2025-09-08",
    category: "IT",
    CorporateType: "midSize",
    homePage: "https://unipressaward.com/",
    prize: "prize2",
    contents: `2025 대학언론 우수보도상 공모전`,
  },
  {
    id: 3,
    title: "제7회 서울교육 데이터 분석·활용 아이디어 공모전",
    day: 30,
    img: "/public/images/contest/contest-3.jpg",
    org: "정보통신산업진흥원",
    views: 165,
    likes: 81,
    startDate: "2025-04-21",
    endDate: "2025-06-01",
    category: "idea",
    CorporateType: "public",
    homePage: "https://data.sen.go.kr/public/main#menu_code=43&type=portal",
    prize: "prize1",
    contents: `
    <strong>제7회 서울교육 데이터 분석·활용 아이디어 공모전</strong>
    <p>
    서울특별시교육청에서는 서울교육 데이터 분석·활용 아이디어 발굴을 통해 공공데이터 활용을 촉진하고, 시민 누구나 교육정책에 참여하는 기회 제공을 통한 수요자 중심의 정책 구현을 위하여 다음과 같이 공모전을 개최하니 서울교육에 관심 있는 분들의 많은 참여를 바랍니다.
    공모전 참가 양식 다운로드
    </p>
<p>
[공통]
</p>
<p>
- 공모전 참가서약서
</p>
<p>
- 개인정보 수집･이용 안내 및 동의서
</p>

<p>
[일반부]
</p>
<p>
- 참가신청서(일반부)
</p>
<p>
- 분석 기획보고서(일반부)
</p>

<p>
[학생부]
</p>
<p>
- 참가신청서(학생부)
</p>
<p>
- 시각화 기획보고서(학생부)
</p>
`,
  },
  {
    id: 4,
    title: "2025 워시즈 캐릭터 활용 공모전",
    day: 30,
    img: "/public/images/contest/constest-1.jpg",
    org: "워시즈",
    views: 1687,
    likes: 866,
    startDate: "2025-04-23",
    endDate: "2025-05-31",
    category: "art",
    CorporateType: "midSize",
    homePage: "https://www.neat-boys.com/contestkorea",
    prize: "prize2",
    contents: `[WASHZ 캐릭터 활용 공모전] Hello WASHZ
`,
  },
  {
    id: 5,
    title: "제 6회 시험/연구용 유전자변형생물체 안전 콘텐츠 공모전(~7/13)",
    day: 30,
    img: "/public/images/contest/contest-5.jpg",
    org: "과학기술정보통신부/국가연구안전관리본부",
    views: 16,
    likes: 8,
    startDate: "2025-05-01",
    endDate: "2025-07-13",
    category: "과학/공학",
    CorporateType: "public",
    homePage: "https://www.lmosafety.or.kr/mps/competition/intro/75",
    prize: "prize2",
    contents: `
    <strong>공모전 개요</strong>
    <p>
    ㅇ (주최/주관)과학기술정보통신부, 한국생명공학연구원 국가연구안전관리본부
    </p>
    <p>
    ㅇ (응모자격)전 국민 누구나(개인 또는 3인 이내 팀으로 지원 가능)
    </p>
    <p>
    ㅇ (공모분야)① 영상 ② 카드뉴스 ③ 포스터
    </p>
    <p>
    ㅇ (접수기간)2025년 5월 1일(목) ~ 7월 13일(일)
    </p>
    <p>
    ㅇ (접수방법)시험·연구용 LMO 정보시스템(www.lmosafety.or.kr)신청페이지 내 접수
    </p>
    <p>
    ※ 복수 응모 가능하나, 작품별 별도 접수 필요
    </p>
    <p>
    ※ 수상작 선정은 1인(팀) 1작품으로 제한
    </p>
    <p>
    ㅇ (공모주제)‘시험·연구용 유전자변형생물체 안전’과 연관성이 있는 주제
    </p>
`,
  },
  {
    id: 6,
    title: "2025 문화 디지털혁신 및 데이터 활용 공모전",
    day: 30,
    img: "/public/images/contest/contest-6.jpg",
    org: "문화체육관광부, 한국문화정보원",
    views: 16,
    likes: 8,
    startDate: "2025-06-02",
    endDate: "2025-07-07",
    category: "IT",
    CorporateType: "midSize",
    homePage: "https://culture.go.kr/digicon/",
    prize: "prize4",
    contents: `
    <strong>2025 문화 디지털혁신 및 데이터 활용 공모전</strong>
    <p>● 추진 일정 - 접수 기간 : 6/2~7/7/p>
    <p>- 1차 서류 심사 : 7/14~7/18</p>
    <p>- 2차 발표 심사 : 7/28~8/1</p>
    <p>- 수상작 발표 : 8/11</p>
    <p>- 시상식 : 11/18</p>
    <p>* 문화데이터 부문 우수사례/아이디어 대상작 <제13회 범정부 공공데이터 활용 창업경진대회> 통합 본선 출품 (~8/22)</p>
    <p>* 상기 일정은 대내/외 사정에 따라 변경될 수 있음● 참여 대상</p>
    <p>- 대한민국 국민 누구나</p>
    <p>* 기관, 기업도 참가 가능(단체)</p>
    <p>* 중복 응모 불가● 공모 분야</p>
    <p>- 우수사례</p>
    <p>* 디지털 기술을 활용한 문화체육관광 관련 서비스 우수사례</p>
    <p>* 문화데이터를 활용한 제품 및 서비스 개발 우수사례</p>
    <p>* 특별상 : AI 기술을 활용한 우수사례</p>
    <p>- 아이디어</p>
    <p>* 디지털 기술을 활용하여 문화·체육·관광에 융합할 수 있는 정책 및 아이디어 기획</p>
    <p>* 문화데이터 기반 사회문제 해결 아이디어 기획</p>
    <p>* 특별상 : AI 기술을 활용한 아이디어</p>
    <p>- 데이터 분석</p>
    <p>* 문화데이터 분석을 통한 정책 현안 해결 또는 분석 인사이트 도출</p>
    <p>● 응모 방법</p>
    <p>- 홈페이지를 통한 온라인 접수 (https://culture.go.kr/digicon)</p>
    <p>● 시상 내역</p>
    <p>- 총 상금 5,400만원 (17점 시상)</p>
    <p>● 문의 사항 - 전화 : 070-4938-6293 - 메일 : contest@kcisa.kr</p>
`,
  },
  {
    id: 7,
    title: "2025 군산 숏 필름 페스타(구,개복단편영화제) 공모전",
    day: 30,
    img: "/public/images/contest/contest-7.jpg",
    org: "군산시민예술촌 호원대학교 산한협력단 군산시",
    views: 16,
    likes: 8,
    startDate: "2025-05-15",
    endDate: "2025-08-30",
    category: "picture",
    CorporateType: "public",
    homePage: "http://www.gsartzone.kr/nwebnics/wBoard/view.php?code=4_1&idx=753&secret=0",
    prize: "prize1",
    contents: `<div class="responsive-element">
    <p><span style="font-size:12px"><b>2025 군산 숏 필름 페스타(구,개복단편영화제) 공모전</b></span></p><p><span style="font-size:12px"><b><br></b></span></p><p><span style="font-size:12px">
    <b><br></b></span></p><p><span style="font-size:12px"><b>참가자격</b></span></p><p><span style="font-size:12px">- 만 19세 이상 누구나 참가 가능 (국적,성별 무관)</span></p><p><span style="font-size:12px"><br></span></p><p><span style="font-size:12px"><b><br></b></span></p><p><span style="font-size:12px"><b>공모일정</b></span></p><p><span style="font-size:12px">- 접수기간 : 2025년 5월 15일(목) ~ 8월 30일(토) 17시까지</span></p><p><span style="font-size:12px">- 시상식 : 2025년 9월 13일(토) 군산회관 (전북 군산시 대학로 308)</span></p><p><span style="font-size:12px"><br></span></p><p><span style="font-size:12px"><b><br></b></span></p><p><span style="font-size:12px"><b>출품규격</b></span></p><p><span style="font-size:12px">- full HD(1920*1080)권장</span></p><p><span style="font-size:12px">- MP4형식</span></p><p><span style="font-size:12px">- 500MB이하 (기기 제한 없음)</span></p><p><span style="font-size:12px">- 러닝타임 : 24초 이상~1분 이내 (엔딩크레딧 포함)</span></p><p><span style="font-size:12px"><br></span></p><p><span style="font-size:12px"><b><br></b></span></p><p><span style="font-size:12px"><b>유의사항</b></span></p><p>- 공모기간 내에 제작한 본인 순수 창작물</p><p><span style="font-size:12px">- 저작권 문제 없는 음원 사용</span></p><p><span style="font-size:12px">- 사행산업통합감독위원회 광고 심의규정에 따라 수상작 내용이 수정될 수 있음.</span></p><p><span style="font-size:12px">- 시상식 미참석시 수상작에서 제외 됨.</span></p><p><span style="font-size:12px">- 본 행사의 취지와 맞지 않는 작품은 수상 제외될 수 있음.</span></p><p><span style="font-size:12px">- AI제작 시 저작권 문제가 없어야 함.&nbsp;</span></p><p><span style="font-size:12px"><br></span></p><p><span style="font-size:12px"><b><br></b></span></p><p><span style="font-size:12px"><b>접수방법</b></span></p><p><span style="font-size:12px">- 군산시민예술촌 홈페이지 공지사항 내 신청서 다운로드 및 작성 후 출품영상과 함께 이메일 (gsartzone@naver.com)접수</span></p><p><span style="font-size:12px"><br></span></p><p><span style="font-size:12px"><b><br></b></span></p><p><span style="font-size:12px"><b>공모전 시상</b></span></p><p><span style="font-size:12px">- 총 ​상금 500만 (대상 200만원)</span></p><p><span style="font-size:12px">** 제세공과금(4.4%)은 본인 부담으로 함</span></p><p><span style="font-size:12px"><br></span></p><p><span style="font-size:12px"><b><br></b></span></p><p><span style="font-size:12px"><b>문의</b></span></p><p><span style="font-size:12px">- 군산시민예술촌 (063-443-7725)​</span></p><p><span style="font-size:12px"><img class="max-width-100" src="https://media-cdn.linkareer.com//se2editor/image/571040" title="image.png" alt="2025 군산 숏 필름 페스타(구,개복단편영화제) 공모전"><br style="clear:both"><br></span></p></div>`,
  },
  {
    id: 8,
    title: "Ansys Simulation Challenge 2025 - 시뮬레이션 소프트웨어 활용 공모전 참가자 모집",
    day: 30,
    img: "/public/images/contest/contest-8.jpg",
    org: "앤시스코리아 유한책임회사",
    views: 16,
    likes: 8,
    startDate: "2025-04-14",
    endDate: "2025-05-23",
    category: "IT",
    CorporateType: "midSize",
    homePage: "https://www.ansys.com/ko-kr",
    prize: "prize1",
    contents: `<div class="responsive-element"><p></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 14pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-style: normal; vertical-align: baseline;"><b>🎯
Ansys Simulation Challenge 2025 참가자 모집!</b></span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 14pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-style: normal; vertical-align: baseline;"><b><br></b></span></p>

<p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="color: rgb(0, 0, 0); font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">Ansys와 함께하는 시뮬레이션 경진대회&nbsp;</span><span style="color: rgb(0, 0, 0); font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">‘Ansys Simulation Challenge 2025’를 개최합니다.</span></p><p><span style="color: rgb(0, 0, 0); font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">‘Ansys Simulation Challenge 2025’는 시뮬레이션을 활용해 기술적 문제를 해결하는 대학생 및 대학원생을 위한 경진대회입니다. 미래의 엔지니어를 꿈꾸는 여러분의 새롭고 창의적인 아이디어를 맘껏 펼쳐보시기 바랍니다.</span><br style="color: rgb(17, 17, 17); font-family: noto, MalgunGothic, &quot; font-size: 17px&quot;; letter-spacing: -0.5px;"><br style="color: rgb(17, 17, 17); font-family: noto, MalgunGothic, &quot; font-size: 17px&quot;; letter-spacing: -0.5px;"><span style="color: rgb(0, 0, 0); font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">Ansys와 함께 차세대 엔지니어로서의 첫걸음을 내디뎌 보세요!</span></p><p><span style="color: rgb(17, 17, 17); font-family: noto, MalgunGothic, &quot; font-size: 17px&quot;; letter-spacing: -0.5px;"><br></span></p><p><span style="color: rgb(17, 17, 17); font-family: noto, MalgunGothic, &quot; font-size: 17px&quot;; letter-spacing: -0.5px;"><br></span></p><p><span style="color: rgb(17, 17, 17); font-family: noto, MalgunGothic, &quot; font-size: 17px&quot;; letter-spacing: -0.5px;"></span>

</p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">💡
주제: Ansys 시뮬레이션 소프트웨어를 활용한 공학적 문제 해결</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 11pt; font-family: &quot;Malgun Gothic Semilight&quot;; font-variant: normal; color: black; text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;"><br></span></p>

<p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">👩‍🎓
대상: 이공계 대학생 및 대학원생 (개인 </span><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">or</span><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;"> 팀,
최대 3인)</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 11pt; font-family: &quot;Malgun Gothic Semilight&quot;; font-variant: normal; color: black; text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;"><br></span></p>

<p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">🗓️
일정</span></p>

<div class="O0" style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 11pt;"><span style="color: rgb(0, 0, 0); font-size: 12pt; font-family: 돋움, Dotum;">•</span></span><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">사전 참가
신청: 4월 14일 ~ 5월 23일</span></div>

<div class="O0" style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 11pt;"><span style="color: rgb(0, 0, 0); font-size: 12pt; font-family: 돋움, Dotum;">•</span></span><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">예선(온라인
제출): 5월 26일 ~ 6월 20일</span></div>

<div class="O0" style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 11pt;"><span style="color: rgb(0, 0, 0); font-size: 12pt; font-family: 돋움, Dotum;">•</span></span><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">본선(오프라인
발표): 7월 첫째 주 (본선 </span><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">진출자</span><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;"> 개별
안내)</span></div>

<p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">&nbsp;</span></p>

<p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-style: normal; vertical-align: baseline;">📝
참가 방법: 온라인 신청서 + 초록 제출<br>
<a href="https://www.ansys.com/ko-kr/campaigns/ansys-simulation-challenge" target="_self"><span style="color: rgb(0, 0, 0); font-size: 12pt; background-color: rgb(255, 167, 0); font-family: 돋움, Dotum;"><b>👉 공식 안내 페이지 바로가기</b></span></a></span></p>
<p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;">
<span style="font-size: 12pt; font-family: 돋움, Dotum; font-variant: normal; color: rgb(0, 0, 0); text-transform: none; font-weight: normal; font-style: normal; vertical-align: baseline;">
&nbsp;</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;">
<span style="letter-spacing: -0.5px; text-indent: 0in; font-size: 12pt; font-family: 돋움, Dotum; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline;">🏆 우수 수상자에게는 상금과 함께 특별 혜택이!</span>
<span style="letter-spacing: -0.5px; text-indent: 0in; font-size: 12pt; font-family: 돋움, Dotum; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline;">&nbsp;</span>
<span style="letter-spacing: -0.5px; text-indent: 0in; font-size: 12pt; font-family: 돋움, Dotum; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline;">지금 도전해보세요!</span></p>
<p></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 12pt; font-family: &quot; font-variant-numeric: normal&quot;; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; font-variant-emoji: normal; vertical-align: baseline;"></span>
</p><p><span style="font-size: 12pt; font-family: 돋움, Dotum;">- 대상(1팀) : 장학금 300만원 / Ansys Korea 인턴십 3개월(1명) / 국내 최대 시뮬레이션 컨퍼런스 'Simulation World Korea 2025' 발표 기회</span></p><p><span style="font-size: 12pt; font-family: 돋움, Dotum;">- 최우수 혁신상(1명) : 장학금 100만원</span></p><p><span style="font-size: 12pt; font-family: 돋움, Dotum;">- 우수 해석상(3팀) : 장학금 50만원</span></p>
<p></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-size: 12pt; font-family: noto, MalgunGothic, &quot; letter-spacing: -0.5px&quot;;"><br></span></p>
<p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: noto, MalgunGothic, &quot;&quot;;"><span style="font-size: 16px; letter-spacing: -0.5px; font-family: 돋움, Dotum;">🖇&nbsp;</span></span>
<span style="font-size: 12pt; font-family: 돋움, Dotum; letter-spacing: -0.5px;">유의사항</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">- 예선 기간 내 제출한 연구 내용을 토대로 본선 진출자 선정</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">- 본선 진출팀(또는 개인)은 예선에 제출한 PPT로 발표 진행</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">- 본선 진출자는 개별 연락 및 안내 예정</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">- 학교 소유 라이선스 또는 Ansys Student 버전사용 권장</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">-본 대회에 제출된 모든 자료의 소유권은 Ansys Korea에 있으며, 연구, 영업 및 마케팅 목적으로 활용될 수 있습니다.</span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;"><br></span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;"><br></span></p><p style="line-height: 15pt; margin: 0pt 0in; text-indent: 0in; text-align: left; direction: ltr; unicode-bidi: embed; vertical-align: baseline; word-break: keep-all;"><span style="font-family: 돋움, Dotum; font-size: 12pt; letter-spacing: -0.5px;">문의사항은 simchallenge@ansys.com 으로 연락주시기 바랍니다.</span></p><p></p></div>
`,
  },
];
