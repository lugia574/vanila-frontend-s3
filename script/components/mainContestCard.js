class MainContestCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['day', 'src'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const day = this.getAttribute('day') || '0';
    const src = this.getAttribute('src') || 'default 이미지';

    // 중복 렌더링 방지 (fetch 중일 때 다시 호출되면 막기)
    if (this.renderingInProgress) return;
    this.renderingInProgress = true;

    this.shadow.innerHTML = ''; // 기존 내용 제거

    // CSS fetch
    fetch('../css/mainContestCard.css')
      .then(res => res.text())
      .then(css => {
        const style = document.createElement('style');
        style.textContent = css;

        const wrapper = document.createElement('div');
        wrapper.className = 'main-contest-card-wrap';
        wrapper.innerHTML = `
            <div class="d-day-box">D-${day}</div>
            <div class="contest-img">
                <img src="${src}" alt="공모전 이미지" />
            </div>`;

        this.shadow.appendChild(style);
        this.shadow.appendChild(wrapper);
      });
  }
}

customElements.define('main-contest-card', MainContestCard);
