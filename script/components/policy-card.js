export const createCard = item => {
  const card = document.createElement("li");
  card.className = "content-card";

  // 출처별 분기 처리
  let linkHref = "#";
  switch (item.source) {
    case "korea" || "region":
      linkHref = `https://youth.seoul.go.kr/infoData/youthPlcyInfo/view.do?plcyBizId=${item.link}`;
      break;
    case "seoul" || "seoul-gu":
      linkHref = `https://youth.seoul.go.kr/infoData/plcyInfo/view.do?plcyBizId=${item.link}`;
      break;
    default:
      linkHref = `https://youth.seoul.go.kr/mainA.do`;
  }

  card.innerHTML = `
    <div class="tag">
      <span class="category">${item.category ? `${item.category}` : "정보X"}</span>
      <span class="region">${item.region ? `${item.region}` : "정보X"}</span>
    </div>
    <div class="content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
    <a href="${linkHref}" target="_blank" rel="noopener noreferrer">🔗 공고 자세히 보기</a>
  `;

  return card;
};
