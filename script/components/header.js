class JeanHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.loadHeader(); // 비동기 함수 호출
  }

  async loadHeader() {
    try {
      const res = await fetch('../css/header.css');
      const css = await res.text();

      const style = document.createElement('style');
      style.textContent = css;

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

      this.shadow.appendChild(style);
      this.shadow.appendChild(header);
    } catch (error) {
      console.error('JeanHeader 로딩 실패:', error);
    }
  }
}

customElements.define('jean-header', JeanHeader);
