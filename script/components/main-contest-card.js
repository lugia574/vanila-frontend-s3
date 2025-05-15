class MainContestCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["day", "src"];
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
    const day = this.getAttribute("day") || "0";
    const src = this.getAttribute("src") || "default 이미지";

    // 중복 렌더링 방지
    if (this.renderingInProgress) return;
    this.renderingInProgress = true;

    this.shadow.innerHTML = ""; // 기존 내용 제거

    try {
      // comm.css와 mainContestCard.css 비동기로 불러오기
      const [commRes, cardRes] = await Promise.all([
        fetch("../../css/common.css"),
        fetch("../../css/main-contest-card.css"),
      ]);

      const commCss = await commRes.text();
      const cardCss = await cardRes.text();

      const style = document.createElement("style");
      style.textContent = `${commCss}\n${cardCss}`;

      const wrapper = document.createElement("div");
      wrapper.className = "main-contest-card-wrap";
      wrapper.innerHTML = `
        <div class="d-day-box">D-${day}</div>
        <a href="#" class="contest-img">
          <img src="${src}" alt="공모전 이미지" />
        </a>
      `;

      this.shadow.appendChild(style);
      this.shadow.appendChild(wrapper);
    } catch (error) {
      console.error("MainContestCard 로딩 실패:", error);
    } finally {
      this.renderingInProgress = false;
    }
  }
}

customElements.define("main-contest-card", MainContestCard);
