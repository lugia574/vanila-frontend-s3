class LicenseCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["licenseTag1", "day", "licenseName", "licenseSummary"];
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
    const licenseTag1 = this.getAttribute("licenseTag1") || "없음";
    const day = this.getAttribute("day") || "0";
    const licenseName = this.getAttribute("licenseName") || "없음";
    const licenseSummary = this.getAttribute("licenseSummary") || "없음";

    // 중복 렌더링 방지
    if (this.renderingInProgress) return;
    this.renderingInProgress = true;

    this.shadow.innerHTML = ""; // 기존 내용 제거

    try {
      // comm.css와 mainContestCard.css 비동기로 불러오기
      const [commRes, cardRes] = await Promise.all([
        fetch("../../css/common.css"),
        fetch("../../css/license-card.css"),
      ]);

      const commCss = await commRes.text();
      const cardCss = await cardRes.text();

      const style = document.createElement("style");
      style.textContent = `${commCss}\n${cardCss}`;

      const wrapper = document.createElement("div");
      wrapper.className = "license-wrap";
      wrapper.innerHTML = `
            <div class="license-top">
            <div class="license-top-left">
            <a href="#" class="tag-box">${licenseTag1}</a>
            </div>
            <div class="lincensc-top-right">
            <div class="d-day-box">D-${day}</div>
            </div>
        </div>
        <div class="license-bottom">
            <div class="license-title">
            <h3 class="card-title">${licenseName}</h3>
            </div>
            <div class="license-summary">
            <p>${licenseSummary}</p>
            </div>
        </div>
        `;

      this.shadow.appendChild(style);
      this.shadow.appendChild(wrapper);
    } catch (error) {
      console.error("licenseCard 로딩 실패:", error);
    } finally {
      this.renderingInProgress = false;
    }
  }
}

customElements.define("license-card", LicenseCard);
