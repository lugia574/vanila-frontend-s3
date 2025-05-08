class JeanHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // CSS 파일을 불러와서 shadow에 style로 넣기
    fetch('../css/header.css')
      .then(res => res.text())
      .then(css => {
        const style = document.createElement('style');
        style.textContent = css;
        shadow.appendChild(style);

        // HTML도 삽입
        shadow.innerHTML += `
            <header>
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
            </header>`;
      });
  }
}

customElements.define('jean-header', JeanHeader);
