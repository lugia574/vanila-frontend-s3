class LicenseCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.needsRender = false; // 렌더 플래그
  }

  static get observedAttributes() {
    return ["licenseSrc", "licenseTag", "dday", "licenseName", "licenseSummary"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.needsRender = true; // 값이 바뀌면 렌더 필요 표시
    }
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    if (this.renderingInProgress || !this.needsRender) return;
    this.renderingInProgress = true;
    this.needsRender = false;

    const licenseSrc = this.getAttribute("licenseSrc");
    const licenseTag = this.getAttribute("licenseTag");
    const dday = this.getAttribute("dday");
    const licenseName = this.getAttribute("licenseName");
    const licenseSummary = this.getAttribute("licenseSummary");

    this.shadow.innerHTML = "";

    try {
      const [commRes, cardRes] = await Promise.all([
        fetch("../../css/common.css"),
        fetch("../../css/license-card.css"),
      ]);

      const commCss = await commRes.text();
      const cardCss = await cardRes.text();

      const style = document.createElement("style");
      style.textContent = `${commCss}\n${cardCss}`;

      const wrapper = document.createElement("div");
      wrapper.className = "license-card";
      wrapper.innerHTML = `
        <a href="${licenseSrc}">
          <div class="license-top">
            <div class="license-top-left">
              <span class="tag-box">${licenseTag}</span>
            </div>
            <div class="lincensc-top-right">
              <div class="d-day-box">D-${dday}</div>
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
        </a>
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
