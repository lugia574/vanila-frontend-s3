class ContestCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["day", "contestImg", "contestTitle", "contestOrg", "contestViews", "contestLikes"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const day = this.getAttribute("dday");
    const contestImg = this.getAttribute("contestImg");
    const contestTitle = this.getAttribute("contestTitle");
    const contestOrg = this.getAttribute("contestOrg");
    const contestViews = this.getAttribute("contestViews");
    const contestLikes = this.getAttribute("contestLikes");

    // 중복 렌더링 방지
    if (this.renderingInProgress) return;
    this.renderingInProgress = true;

    this.shadow.innerHTML = ""; // 기존 내용 제거

    try {
      // comm.css와 mainContestCard.css 비동기로 불러오기
      const [commRes, cardRes] = await Promise.all([
        fetch("../../css/common.css"),
        fetch("../../css/contest-card.css"),
      ]);

      const commCss = await commRes.text();
      const cardCss = await cardRes.text();

      const style = document.createElement("style");
      style.textContent = `${commCss}\n${cardCss}`;

      const wrapper = document.createElement("div");
      wrapper.className = "contest-item";
      wrapper.innerHTML = `
        <div class="contest-item-image">
            <div class="dday-wrap">D-${day}</div>
            <img src="${contestImg}" alt="${contestTitle} 이미지" />
        </div>
        <div class="contest-item-info">
            <div class="contest-title">
            ${contestTitle}
            </div>
            <div class="contest-org">${contestOrg}</div>
            <div class="contest-meta">
            <div>조회 ${contestViews}</div>
            <div>찜 ${contestLikes}</div>
            </div>
        </div>
        `;

      this.shadow.appendChild(style);
      this.shadow.appendChild(wrapper);
    } catch (error) {
      console.error("ContestCard 로딩 실패:", error);
    } finally {
      this.renderingInProgress = false;
    }
  }
}

customElements.define("contest-card", ContestCard);
