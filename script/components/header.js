class JeanHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.loadHeader();
  }

  async loadHeader() {
    try {
      // comm.css 불러오기
      const commRes = await fetch('../../css/common.css');
      const commCss = await commRes.text();

      // header.css 불러오기
      const headerRes = await fetch('../../css/header.css');
      const headerCss = await headerRes.text();

      // style 태그 생성 및 두 CSS를 결합
      const style = document.createElement('style');
      style.textContent = `${commCss}\n${headerCss}`;

      // header 태그 생성 및 내용 삽입
      const header = document.createElement('header');
      header.innerHTML = `
        <div class="content-center">
          <h1 class="logo"><a href="#">청바지</a></h1>
          <nav id="main-nav">
            <ul>
              <li><a href="#">공모전</a></li>
              <li><a href="#">청년정책</a></li>
              <li><a href="#">자격증</a></li>
              <li><a href="#">커뮤니티</a></li>
            </ul>
          </nav>
          <nav id="auth-menu">
            <ul>
              <li><a href="#">로그인</a></li>
              <li><a href="#">회원가입</a></li>
            </ul>
          </nav>
        </div>
      `;

      // Shadow DOM에 style과 header 삽입
      this.shadow.appendChild(style);
      this.shadow.appendChild(header);
    } catch (error) {
      console.error('JeanHeader 로딩 실패:', error);
    }
  }
}

customElements.define('jean-header', JeanHeader);
