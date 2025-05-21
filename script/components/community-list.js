class CommunityList extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "communityField",
      "communityType",
      "day",
      "communityTitle",
      "communitySummary",
      "communityWriter",
      "communityComments",
      "communityScraps",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      clearTimeout(this._renderTimeout);
      this._renderTimeout = setTimeout(() => {
        if (this.shouldRender()) {
          this.render();
        }
      }, 0);
    }
  }

  // connectedCallback은 생략하거나 비워둠 → 속성 다 들어온 후에만 렌더
  connectedCallback() {
    // Do nothing to avoid premature render
  }

  shouldRender() {
    return this.hasAttribute("communityField") &&
           this.hasAttribute("communityType") &&
           this.hasAttribute("day") &&
           this.hasAttribute("communityTitle") &&
           this.hasAttribute("communitySummary") &&
           this.hasAttribute("communityWriter") &&
           this.hasAttribute("communityComments") &&
           this.hasAttribute("communityScraps");
  }

  async render() {
    const communityId = this.getAttribute("id") || 0;
    const communityField = this.getAttribute("communityField") || "없음";
    const communityType = this.getAttribute("communityType") || "없음";
    const day = this.getAttribute("day") || "0";
    const communityTitle = this.getAttribute("communityTitle") || "없음";
    const communitySummary = this.getAttribute("communitySummary") || "없음";
    const communityWriter = this.getAttribute("communityWriter") || "없음";
    const communityComments = this.getAttribute("communityComments") || "0";
    const communityScraps = this.getAttribute("communityScraps") || "0";

    if (this.renderingInProgress) return;
    this.renderingInProgress = true;

    this.shadow.innerHTML = ""; // 기존 내용 제거

    try {
      const commRes = await fetch("../../css/common.css");
      const commCss = await commRes.text();

      const listRes = await fetch("../../css/community-list.css", { cache: "no-store" });
      const listCss = await listRes.text();

      const style = document.createElement("style");
      style.textContent = `${commCss}\n${listCss}`;

      const communityList = document.createElement("a");
      communityList.className = "content-link";
      communityList.innerHTML = `
        <a href="/pages/community/community-content.html?id=${communityId}">
          <div class="content-wrap">
            <div class="content-header">
              <div class="left-group">
                <div class="title">${communityTitle}</div>
                <div class="field">${communityField}</div>
              </div>
              <div class="right-group">
                <div class="type">${communityType}</div>
                <div class="d-day">D-${day}</div>  
              </div>
            </div>

            <div class="content-summary">
              <p>${communitySummary}</p>
            </div>

            <div class="content-footer">
              <div class="left-group">
                <div class="writer">${communityWriter}</div>
              </div>

              <div class="right-group">
                <div class="comment">
                  <i></i>
                  <span>${communityComments}</span>
                </div>
                <div class="scrap">
                  <i></i>
                  <span>${communityScraps}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      `;

      this.shadow.appendChild(style);
      this.shadow.appendChild(communityList);
    } catch (error) {
      console.error("communityList 로딩 실패:", error);
    } finally {
      this.renderingInProgress = false;
    }
  }
}

customElements.define("community-list", CommunityList);
