class CommentContent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "userName",
      "commentDetail",
      "writeDate"
    ];
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
    const userName = this.getAttribute("userName") || "없음";
    const commentDetail = this.getAttribute("commentDetail") || "없음";
    const writeDate = this.getAttribute("day") || "2025-05-17 00:00:00";
  
    // 중복 렌더링 방지
    if (this.renderingInProgress) return;
    this.renderingInProgress = true;

    this.shadow.innerHTML = ""; // 기존 내용 제거

    try {
      const commRes = await fetch("../../css/common.css");
      const commCss = await commRes.text();

      const CommunityContentRes = await fetch("../../css/community-content.css", { cache: "no-store" }); // 확장자 누락 주의
      const CommunityContentCss = await CommunityContentRes.text();
      console.log(CommunityContentCss);
      const style = document.createElement("style");
      style.textContent = `${commCss}\n${CommunityContentCss}`;

      const commentContent = document.createElement("comment-detail");
      commentContent.innerHTML = `
        <div class="comment-detail">
            <div class="comment-left">
                <i class="profile-icon"></i>
            </div>
            
            <div class="comment-right">
                <span class="user-name">${userName}</span>
                <div class="comment-content">
                    ${commentDetail}
                </div>
                <span class="write-date">${writeDate}</span>
                <button class="reply-btn">답글</button>
            </div>
        </div>
      `;

      this.shadow.appendChild(style);
      this.shadow.appendChild(commentContent);
    } catch (error) {
      console.error("comment-content 로딩 실패:", error);
    }
  }
}

customElements.define("comment-content", CommentContent);
