class CommunityCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "communityfield",
      "communitytype",
      "day",
      "communitytitle",
      "communitysummary",
      "communitywriter",
      "communitycomments",
      "communityscraps",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.isConnected) {
    this.render();
  }
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const communityField = this.getAttribute("communityfield") || "없음";
    const communityType = this.getAttribute("communitytype") || "없음";
    const day = this.getAttribute("day") || "0";
    const communityTitle = this.getAttribute("communitytitle") || "없음";
    const communitySummary = this.getAttribute("communitysummary") || "없음";
    const communityWriter = this.getAttribute("communitywriter") || "없음";
    const communityComments = this.getAttribute("communitycomments") || "0";
    const communityScraps = this.getAttribute("communityscraps") || "0";

    // 중복 렌더링 방지
    if (this.renderingInProgress) return;
    this.renderingInProgress = true;

    this.shadow.innerHTML = ""; // 기존 내용 제거

    try {
      const commRes = await fetch("../../css/common.css");
      const commCss = await commRes.text();

      const CommunityCardRes = await fetch("../../css/community-list.css", { cache: "no-store" }); // 확장자 누락 주의
      const CommunityCardCss = await CommunityCardRes.text();

      const style = document.createElement("style");
      style.textContent = `${commCss}\n${CommunityCardCss}`;
      console.log("CommunityCardCss 내용:", CommunityCardCss);

  
      const communityCard = document.createElement("a");
      communityCard.className = "card-content-link";
      communityCard.innerHTML = `
        <div class="content-wrap">
            <div class="content-header">
                <div class="field">${communityField}</div>
                <div class="type">${communityType}</div>
                <div class="d-day">D-${day}</div> 
            </div>

            <div class="content-title">
                <div class="title">${communityTitle}</div>
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
      `;

      this.shadow.appendChild(style);
      this.shadow.appendChild(communityCard);
    } catch (error) {
      console.error("communityCard 로딩 실패:", error);
    }
  }
}

customElements.define("community-card", CommunityCard);