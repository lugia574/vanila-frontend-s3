const detailList = document.querySelector(".detail-list");

// 지역 배열
const koreaRegions = ["서울", "경기", "부산", "전남"];
const seoulRegions = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

console.log("--js file load--");

document.addEventListener("click", e => {
  const id = e.target.id;
  if (!["region", "gu"].includes(id)) {
    return;
  }

  detailList.innerHTML = "";

  const data = id === "region" ? koreaRegions : seoulRegions;

  for (let item of data) {
    const button = document.createElement("button");
    button.textContent = item;
    button.className = "filter-item";
    detailList.appendChild(button);
  }
});
