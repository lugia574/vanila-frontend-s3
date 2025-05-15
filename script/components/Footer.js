class JeanFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // DOM에 연결된 후 안전하게 fetch 가능
    this.loadFooter();
  }

  async loadFooter() {
    try {
      // common.css 불러오기 (body 스타일이 포함된 파일)
      const commRes = await fetch("../../css/common.css");
      const commCss = await commRes.text();

      // footer.css 불러오기 (SCSS에서 컴파일된 CSS)
      const footerRes = await fetch("../../css/footer.css");
      const footerCss = await footerRes.text();

      // style 태그 생성 및 두 CSS를 결합
      const style = document.createElement("style");
      style.textContent = `${commCss}\n${footerCss}`;

      // footer 태그 생성 및 내용 삽입
      const footer = document.createElement("footer");
      footer.innerHTML = `
        <div class="content-center footer-top">
            <strong>청바지</strong>
        </div>
        <div class="content-center footer-middle">
            <p>서울 종로구 우정국 2길 37 이젠 아카데미 5층 501호</p>
            <p>청년 정보 사이트 청바지 000 - 0000 (평일 09시 ~ 18시)</p>
            <p>시스템 관련 문의 000@gmail.com</p>
        </div>
        <div class="content-center footer-bottom">
            <div class="footer-links">
                <a href="#">이용약관</a> |
                <a href="#">개인정보처리방침</a> |
                <a href="#">오픈API소개</a>
            </div>
            <div class="footer-copy">
                Copyright Office for Youth Policy Coordination. All Rights Reserved
            </div>
        </div>
      `;

      // ✅ 기존 shadow DOM 비우기
      this.shadow.innerHTML = "";

      // Shadow DOM에 style과 footer 삽입
      this.shadow.appendChild(style);
      this.shadow.appendChild(footer);
    } catch (error) {
      console.error("JeanFooter 로딩 실패:", error);
    }
  }
}

customElements.define("jean-footer", JeanFooter);
